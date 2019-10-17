Vue.component('cuerpo-principal',{
	template:
	`
<div>
<section id="principal" class="container">
                        <div class="row">
	<div class="col-md-12">
		<h1 class="SectionTitle">Agenda</h1>
	</div>
</div>
<div class="row">
	<div class="col-md-3">
		<!-- Opciones para alumno -->
		<div class="well">
			<button type="button" class="btn btn-success btn-sm btn-block add-user-to-group">
				<i class="fa fa-user-plus fa-lg fa-fw pull-left" aria-hidden="true"></i>
				Inscribirme a un grupo
			</button>
		</div>

				<!-- Opciones para profesor -->
		<div class="well">
			<button type="button" class="btn btn-success btn-sm btn-block btn-ex-NewExam">
				<i class="fa fa-file-text fa-lg fa-fw pull-left" aria-hidden="true"></i>
				Crear examen
			</button>
			<button type="button" class="btn btn-primary btn-sm btn-block add-group">
				<i class="fa fa-graduation-cap fa-lg fa-fw pull-left" aria-hidden="true"></i>
				Crear grupo
			</button>
						<button type="button" class="btn btn-primary btn-sm btn-block btn-word-wrap newApp">
				<i class="fa fa-calendar-plus-o fa-lg fa-fw pull-left" aria-hidden="true"></i>
				Agendar examen
			</button>
					</div>
			</div>
	<div class="col-md-9">
		
		<div class="alert alert-info">
			<p><strong><i class="fa fa-exclamation-triangle"></i> ¡Atención!</strong> La Universidad de Colima le invita a contestar la siguiente <a href="https://forms.gle/57yjm4dK4fz8d7FB6" target="_blank">encuesta</a>, con la finalidad de evaluar el servicio de nuestra plataforma de evaluación en línea.</p>
			<p><a href="https://forms.gle/57yjm4dK4fz8d7FB6" target="_blank">Responder encuesta</a> (Fecha de corte: 14 de junio, 2019)</p>
		</div>
		

		<div class="panel panel-default">
			<div class="panel-heading">
				<h3 class="panel-title">Exámenes agendados</h3>
			</div>
			<div class="panel-body">
			<table 
				id="examenes-agenda" 
				class="tableConfirmFix" 
				data-url="https://evpraxis.ucol.mx/examenes/getMyStudentApplications/" 
				data-search="true"
				data-side-pagination="server"
				data-pagination="true" 
				data-page-size="5"
				data-page-list="[5, 10, 20, 50, 100]"
			>
					<thead>
						<tr>
							<th data-field="applicationKey"  data-sortable="true" data-align="left">Clave de aplicación</th>     
							<th data-field="examName"  data-sortable="true" data-align="left" data-formatter='agendaAppExamName'>Examen</th>     
							<th data-field="groupName" data-sortable="true" data-formatter='agendaAppGroupName'>Grupo</th>
							<th data-field="application_datetime" data-sortable="true" data-order="desc" data-formatter="dateFormatter">Fecha - hora</th>
							<th data-field="fechaIdOp" data-formatter="agendaAppOptions" data-events="operateOpciones"> Opciones </th>
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
})