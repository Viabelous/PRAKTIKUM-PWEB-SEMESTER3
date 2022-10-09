<?php
$data =  array('nama'           => $_GET['name'],
               'arrival'        => $_GET['arrival_date'],
               'depart'         => $_GET['departure_date'],
               'SuperiorS'      => isset($_GET['SuperiorS_room']) ? "Ya" : "",
               'SuperiorSNum'   => isset($_GET['SuperiorS_room']) ? $_GET['SuperiorSnum'] : "",
               'SuperiorD'      => isset($_GET['SuperiorD_room']) ? "Ya" : "",
               'SuperiorDNum'   => isset($_GET['SuperiorD_room']) ? $_GET['SuperiorDnum'] : "",
               'DeluxeS'        => isset($_GET['DeluxeS_room']) ? "Ya" : "",
               'DeluxeSNum'     => isset($_GET['DeluxeS_room']) ? $_GET['DeluxeSnum'] : "",
               'DeluxeD'        => isset($_GET['DeluxeD_room']) ? "Ya": "",
               'DeluxeDNum'     => isset($_GET['DeluxeD_room']) ? $_GET['DeluxeDnum']: "",
               'JuniorSuite'    => isset($_GET['JuniorSuite_room']) ? "Ya" : "",
               'JuniorSuiteNum' => isset($_GET['JuniorSuite_room']) ? $_GET['JuniorSuitenum'] : "",
               'Aula'           => isset($_GET['aula']) ? "Ya" : "",
               'AulaNum'        => isset($_GET['aula']) ? "1" : "",
               'RuangRapat'     => isset($_GET['ruang_rapat']) ? "Ya" : "",
               'RuangRapatNum'  => isset($_GET['ruang_rapat']) ? "1" : "",
               'Tanggal'        => $_GET['date_of_submit'],
               'Waktu'          => $_GET['time_of_submit']
);

echo '
<style>
.centralData{
    text-align: center;
}
</style>

<br>
<br>
<br>
<table width=50% border=1 align="center">
    <tr style="background-color: darkcyan">
        <td width=20% align="center"><img src="Clara Stella Icon.png" width=70%> </img>
        <th style="color: white;">Data Formulir Reservasi Clara Stella </th>
    </tr>
    <tr>
        <td colspan=2><p> Nama: '.$data['nama'].'
            <br> Jadwal Kedatangan: '.$data['arrival'].'
            <br> Jadwal Kepulangan: '.$data['depart'].'
            <p>
        </td>
    </tr>
    <tr>    
        <table width=50% border=1 align="center">
            <tr>
                <th> Ruangan / Kamar </th>
                <th> Dilakukan Pemesanan </th>
                <th> Jumlah </th>
            </tr>
            <tr>
                <td> Superior Single </td>
                <td class="centralData"> '.$data['SuperiorS'].' </td>
                <td class="centralData"> '.$data['SuperiorSNum'].' </td>
            </tr>
            <tr>
                <td> Superior Double </td>
                <td class="centralData"> '.$data['SuperiorD'].' </td>
                <td class="centralData"> '.$data['SuperiorDNum'].' </td>
            </tr>
            <tr>
                <td> Deluxe Single </td>
                <td class="centralData"> '.$data['DeluxeS'].' </td>
                <td class="centralData"> '.$data['DeluxeSNum'].' </td>
            </tr>
            <tr>
                <td> Deluxe Double </td>
                <td class="centralData"> '.$data['DeluxeD'].' </td>
                <td class="centralData"> '.$data['DeluxeDNum'].' </td>
            </tr>
            <tr>
                <td> Junior Suite </td>
                <td class="centralData"> '.$data['JuniorSuite'].' </td>
                <td class="centralData"> '.$data['JuniorSuiteNum'].' </td>
            </tr>
            <tr>
                <td> Superior Double </td>
                <td class="centralData"> '.$data['SuperiorD'].' </td>
                <td class="centralData"> '.$data['SuperiorDNum'].' </td>
            </tr>
            <tr>
                <td> Aula </td>
                <td class="centralData"> '.$data['Aula'].' </td>
                <td class="centralData"> '.$data['AulaNum'].' </td>
            </tr>
            <tr>
                <td> Ruang Rapat </td>
                <td class="centralData"> '.$data['RuangRapat'].' </td>
                <td class="centralData"> '.$data['RuangRapatNum'].' </td>
            </tr>
            <tr>
                <th colspan=3>'.$data['Tanggal'].' . '.$data['Waktu'].'</th>
            </tr>
        </table>
    </tr>
</table>';
?>