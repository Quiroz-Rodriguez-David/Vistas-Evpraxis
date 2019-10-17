Vue.component('cuerpo-principal-grupos',{
	template:
`
<div>
 <section id="principal" class="container">
 	<div class="row">
		<div class="col-md-12">
			<h1 class="SectionTitle">Grupos</h1>
		</div>
	</div>
		<div class="row">
			<div class="col-md-3">
					<!-- Opciones para profesor -->
				<div class="well">
					<button type="button" class="btn btn-primary btn-sm btn-block add-group">
						<i class="fa fa-graduation-cap fa-lg pull-left" aria-hidden="true"></i>
						Crear grupo
					</button>
				</div>
					<div class="panel panel-default">
						<div class="panel-heading">
							<div class="row">
								<div class="col-md-7"><h3 class="panel-title">Mis escuelas</h3>
								</div>
								<div class="col-md-5 text-right"><span class="label label-primary">Staff</span>
								</div>
							</div>
						</div>
							<div class="panel-body">
								<ul>
									<li>
										<ul class="list-unstyled">
											<li><span class='text-primary'>test</span></li>
										</ul>														
									</li>
								</ul>
							</div>
					</div>
						<div class="panel panel-default">
							<div class="panel-heading">
								<div class="row">
									<div class="col-md-7"><h3 class="panel-title">Mis escuelas</h3>
									</div>
									<div class="col-md-5 text-right"><span class="label label-primary">Alumno</span>
									</div>
								</div>
							</div>
								<div class="panel-body">
									<span class="text-info">No hay grupos asignados</span>
								</div>
						</div>
			</div>
				<div class="col-md-9">
					<div class="panel panel-default">
						<div class="panel-heading">
							<h3 class="panel-title">Lista de grupos</h3>
						</div>
							<div class="panel-body">
								<table 
								id="groups-list" 
								class='tableConfirmFix' 
								data-url="https://evpraxis.ucol.mx/grupos/getMyGroups/" 
								data-search="true" 
								data-side-pagination="server"
								data-pagination="true" 
								data-page-size="5"
								data-page-list="[5, 10, 20, 50, 100]"
								data-row-style="groupRowStyle"
								>
									<thead>
										<tr>
											<th data-field="key"  data-sortable="true" data-align="left">Clave de grupo</th>     
											<th data-field="name"  data-sortable="true" data-align="left" data-formatter="formatterGroupName">Grupo</th>     
											<th data-field="school_name" data-sortable="true" data-formatter="formatterGroupSchool">Escuela</th>
											<th data-field="career_name" data-sortable="true">Carrera</th>
											<th data-field="id" data-formatter="formatterGroupOptions" data-align="center"> Opciones </th>
										</tr>
									</thead> 
								</table>
							</div>
					</div>
						<div class="panel panel-default">
							<div class="panel-heading">
								<h3 class="panel-title">Lista de grupos de las escuelas a las que tengo acceso</h3>
							</div>
								<div class="panel-body">
									<table 
										id="groups-school-list" 
										class='tableConfirmFix' 
										data-url="https://evpraxis.ucol.mx/grupos/getMySchoolGroups/" 
										data-search="true" 
										data-side-pagination="server"
										data-pagination="true" 
										data-page-size="5"
										data-page-list="[5, 10, 20, 50, 100]"
										data-row-style="groupRowStyle"
									>
										<thead>
											<tr>
												<th data-field="key"  data-sortable="true" data-align="left">Clave de grupo</th>     
												<th data-field="name"  data-sortable="true" data-align="left" data-formatter="formatterGroupName">Grupo</th>     
												<th data-field="school_name" data-sortable="true" data-formatter="formatterGroupSchool">Escuela</th>
												<th data-field="career_name" data-sortable="true">Carrera</th>
												<th data-field="id" data-formatter="formatterGroupOptions" data-align="center"> Opciones </th>
											</tr>
										</thead> 
									</table>
								</div>
						</div>
		</div>
	</div>        
	</section>
</div>
`
});