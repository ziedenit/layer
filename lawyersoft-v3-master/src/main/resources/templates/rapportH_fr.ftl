<#ftl encoding="utf-8">
  <!DOCTYPE html>
<html>
<body>
 
    <div style='margin-left:560px;position: absolute'>
<strong>date :${currentDate ?datetime?string('dd-MM-yyyy')} </strong>
</div>
</div>
<br></br><br></br>
<br></br><br></br>
<div>
<div style='margin-left:250px'>
  <h2>Rapport d'affaire</h2>
</div>
<br></br>
<table style='width:100%;border:1px solid black'>
<tr>
 	<td ><strong>Titre : </strong></td >  <td><#if titreHonnoraire??> ${titreHonnoraire}</#if>  </td> 
 	<td> <strong>Type d'affaire</strong></td> <td><#if typeAff??>${typeAff}</#if></td>
 </tr>
 
 	
 </tr>
  </table>
</div>
<br></br>
<br></br>



 </body>
</html>