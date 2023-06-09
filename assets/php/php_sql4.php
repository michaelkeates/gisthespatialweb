<?php
//console error reporting:  0=off  1=on
ini_set('display_errors', 1);
//i dont want to use ChromePHP
include 'ChromePhp.php';
//there was an issue with the json_decode function so i used this instead for the foreach loop to get this task working
$incluArr = json_decode($_GET['inclu'], true);


//** database login details **
//$host = 'ces-gis';
$host = '';
$port = '';
$dbname = '';
$user = '';
$password = '';

//attempt connection
$conn = pg_connect("host=$host port=$port dbname=$dbname user=$user password=$password");
if (!$conn) {
	ChromePhp::error("...database connection FAILED" );
	exit;
}

// Parse the inclu parameter as a JSON string into an array
$inclu = json_decode($_GET['inclu'], true);

//table and fields
$table = $_GET['table'];
$inclu = $_GET['inclu'];
$geomy = $_GET['geomy'];

//construct substitutions
$fields = "";
$fields = "";
foreach ($incluArr as $i => $col) {
	$fields = $fields . $col . ", ";
}
$fields = $fields . $geomy;
$geom = " - " . $geomy;

//build query
$sql1 =
	"SELECT jsonb_build_object(
			'type',     'FeatureCollection',
			'features', jsonb_agg(feature))
	FROM (
		SELECT jsonb_build_object(
			'type',       'Feature',
			'geometry',   ST_AsGeoJSON(st_transform(geom,4326),4)::jsonb,
			'properties', to_jsonb(row) #omits#
		) AS feature
		FROM (SELECT #fields# FROM #table#) row) features;";

//replace placeholders
$sql2 = str_replace("#table#", $table, $sql1);
$sql3 = str_replace("#fields#", $fields, $sql2);
$sql4 = str_replace("#omits#", $geom, $sql3);
ChromePhp::log($sql4);

//exdecute query
if (!$response = pg_query($conn, $sql4)) {
	ChromePhp::error("*SQL failed*");
	exit;
}

//return data
while ($row = pg_fetch_row($response)) {
	foreach ($row as $i => $attr) {
		echo $attr;
	}
}
