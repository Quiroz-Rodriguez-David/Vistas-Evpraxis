Vue.component('cuerpo-principal-examen',{
	template:
`
<div>
	<section id="principal" class="container">
        <div class="row">
			<div class="col-md-12">
				<h1 class="SectionTitle">Exámenes</h1>
			</div>
		</div>
	<div class="row">
		<div class="col-md-3">
				<!-- Opciones para profesor -->
			<div class="well">
				<button type="button" class="btn btn-success btn-sm btn-block btn-ex-NewExam">
					<i class="fa fa-file-text fa-lg fa-fw pull-left" aria-hidden="true"></i>
					Crear examen
				</button>
					<button type="button" class="btn btn-primary btn-sm btn-block btn-word-wrap newApp">
						<i class="fa fa-calendar-plus-o fa-lg fa-fw pull-left" aria-hidden="true"></i>
						Agendar examen
					</button>
			</div>
		</div>
	<div class="col-md-9">
		<div class="panel panel-default">
			<div class="panel-heading">
				<h3 class="panel-title">Exámenes agendados</h3>
			</div>
				<div class="panel-body">
					<table 
						id="examenes-app" 
						class="tableConfirmFix" 
						data-url="https://evpraxis.ucol.mx/examenes/getMyApplications/" 
						data-search="true" 
						data-side-pagination="server"
						data-pagination="true" 
						data-page-size="5"
						data-page-list="[5, 10, 20, 50, 100]" 
						data-row-style="appRowStyle"
					>
						<thead>
							<tr>
								<th data-field="key"  data-sortable="true" data-align="left">Clave de<br> aplicación</th>     
								<th data-field="application_datetime" data-sortable="true" data-order="desc" data-formatter="dateFormatter">Fecha - hora</th>
								<th data-field="exam_identifier"  data-sortable="true" data-align="left">Título del examen</th>     
								<th data-field="group_identifier" data-sortable="true" data-formatter="appGroupFormatter">Grupo</th>
								<th data-field="school_name" data-sortable="true" data-order="desc" >Escuela</th>							
								<th data-field="fechaIdOp" data-formatter="formatApplicationOption" data-events="operateOpciones"> Opciones </th>
							</tr>
						</thead> 
					</table>
				</div>
		</div>
			<div class="panel panel-default">
				<div class="panel-heading">
					<h3 class="panel-title">Exámenes</h3>
				</div>
					<div class="panel-body">
						<table 
							id="examenes-exa" 
							class="tableConfirmFix" 
							data-url="https://evpraxis.ucol.mx/examenes/getMyExams/" 
							data-search="true" 
							data-side-pagination="server"
							data-pagination="true" 
							data-page-size="5"
							data-page-list="[5, 10, 20, 50, 100]"  
							data-row-style="examRowStyle"
						>
							<thead>
								<tr>
									<th data-field="key"  data-sortable="true" data-align="left">Clave<br>de examen</th>     
									<th data-field="name"  data-sortable="true" data-align="left">Título</th>     
									<th data-field="exam_type_name" data-sortable="true">Tipo</th>
									<th data-field="tags" data-sortable="true" data-order="desc" data-formatter="formatTags">Etiquetas</th>
									<th data-field="id" data-formatter="formatExamOptions" data-events="operateOpciones"> Opciones </th>
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