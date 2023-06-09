<!doctype html>
<!--==================== MENU ====================-->
<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
<div class="user">
    <img src="assets/img/avatar.png" alt="" />
    <h3>Michael Keates</h3>
    <p>Student ID: 23009273</p>
</div>
<div class="links">
    <hr class="seperator">
    <div class="link">
        <div class="bx2 bx-home" id='darktoggle'></div>
        <button class="card-button" onclick="btnclick('sections/main.php')">Home</button>
    </div>
    <hr class="seperator">
    <div class="link">
        <h2>Coursework 1 - Google & Bing</h2>
        <div class="bx2 bx-map" id='darktoggle'></div>
        <button class="card-button" onclick="btnclick('tutorials/coursework1/googlemaps/tasks.php')">Google Maps</button>
        <button class="card-button" onclick="btnclick('tutorials/coursework1/bingmaps/tasks.php')">Bing Maps</button>
    </div>
    <hr class="seperator">
    <div class="link">
        <h2>Coursework 2 - LeafletJS & Open Layers</h2>
        <div class="bx2 bx-map" id='darktoggle'></div>
        <button class="card-button" onclick="btnclick('tutorials/coursework2/leafletjs/tasks.php')">LeafletJS</button>
        <button class="card-button" onclick="btnclick('tutorials/coursework2/openlayers/tasks.php')">Open Layers Maps</button>
    </div>
    <hr class="seperator">
    <div class="link">
        <h2>Coursework 3 - Postgres & Geoserver</h2>
        <div class="bx2 bx-map" id='darktoggle'></div>
        <button class="card-button" onclick="btnclick('tutorials/coursework3/leafletjs/tasks.php')">LeafletJS</button>
    </div>
</div>
<!--============= javascript to slide menu open and close ====================-->
<script>
    function openNav() {
        document.getElementById("dashboard").style.width = "500px";
    }

    function closeNav() {
        document.getElementById("dashboard").style.width = "0";
    }
</script>
<script type="text/javascript">
    function btnclick(_url) {
        $.ajax({
            url: _url,
            type: 'post',
            success: function(data) {
                $('#DIVID').html(data);
                document.getElementById("dashboard").style.width = "0";
            },
            error: function() {
                $('#DIVID').text('An error occurred');
            }
        });
    }
</script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>