<section class="sql-output">
    <?php
    ini_set('display_errors', 0);
    include 'ChromePhp.php';

    $host = 'ces-gis';
    $port = '5432';
    $dnmame = 'usw_teaching';
    $user = 'guest';
    $password = 'guest';

    //establish connection to database
    $conn = pg_connect("host=$host port=$port dbname=$dnmame user=$user password=$password");
    if (!$conn) {
        ChromePhp::error("...database connection FAILED");
        exit;
    }
    ChromePhp::warn("...database connection Worked");

    //specify table and fields
    $table = $_GET['table'];
    $fields = $_GET['fields'];

    //put field names into a php string
    $fieldstr = "";
    foreach ($fields as $i => $field) {
        $fieldstr = $fieldstr . "$field, ";
    }

    //add geometry field (geojson & lat/long)
    $fieldstr = $fieldstr . "ST_AsGeoJSON(ST_Transform(geom,4326))";

    //build final query
    $sql = "SELECT $fieldstr FROM $table";
    ChromePhp::log($sql);
    //console log
    echo $sql;

    //execute query
    if (!$response = pg_query($conn, $sql)) {
        ChromePhp::error("*SQL failed*");
        echo "*SQL failed*";
        exit;
    }

    //return date
    // items seperated by "**"
    // rows seperated by "#"
    while ($row = pg_fetch_row($response)) {
        foreach ($row as $i => $attr) {
            echo $attr . "**";
        }
        echo "#";
    }
    ?>
</section>