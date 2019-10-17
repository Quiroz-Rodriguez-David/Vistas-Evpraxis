Vue.component('editor-examen',{
	template:
`
<div>

        <section id="principal" class="container">
                        <form action="https://evpraxis.ucol.mx/examenes/crear" method="post" enctype="multipart/form-data" id="formNewExam" onSubmit="return newExam.validate()">	<div class='row'>
		<div class='col-sm-12'>
			<h1 class='SectionTitle'>Crear examen</h1>
		</div>
	</div>
	<div class='row'>
		<div class='col-xs-4 col-md-3'>
			<div class='well fixedMenu'>
				<button type='submit' class='btn btn-success btn-lg btn-block btn-ex-saveAll'>
					<i class="fa fa-floppy-o fa-lg pull-left" aria-hidden="true"></i></span>
					Guardar
				</button>

				<button type='button' class='btn btn-primary btn-sm btn-block btn-ex-newSection'>
					<i class="fa fa-plus-circle fa-lg pull-left" aria-hidden="true"></i>
					Crear nueva sección
				</button>

				<br/>
				<span class='label label-info'>Elementos del examen (navegación)</span>
				<div id='tree'></div>

			</div>
		</div>

		<div id='examFrmTodo' class='col-xs-8 col-md-9 panel-group' role='tablist' aria-multiselectable='true'>

			<div class='panel panel-info' id='divDatosGenerales' data-section='0'>
				<div class='panel-heading' role='tab' id='headingDatosGenerales'>
					<h3 class='panel-title'>
						<a role='button' data-toggle='collapse' data-parent='#examFrmTodo' href='#collapseDatosGenerales' aria-expanded='false' aria-controls='collapseDatosGenerales'>
							<h3 class='panel-title'>Datos generales del examen <span id='title-exam'></span></h3>
						</a>
					</h3>
				</div>
				<div id='collapseDatosGenerales' class='accordionSection panel-collapse collapse' role='tabpanel' aria-labelledby='headingDatosGenerales'>
					<div class='panel-body form-horizontal'>
						<div class='form-group'>
							<input type='hidden' name='exam_id' id='exam_id' value="">
							<label class='col-sm-4 col-md-3 control-label' for='exam_name'>Titulo<sup>*</sup></label>
							<div class='col-sm-7 col-md-9'>
								<input name='exam_name' type='text' class='form-control' id='exam_name' placeholder='Primera parcial de Matemáticas II' data-validate='{"required":true}' value="">
							</div>
						</div>
						<div class='form-group'>
							<label class='col-sm-4 col-md-3 control-label' for='exam_type'>Tipo de examen<sup>*</sup></label>
							<div class='col-sm-7 col-md-9'>
								<select name='exam_type' id='exam_type' class='form-control' data-validate='{"required":true}'>
																		<option value='1' >Examen</option>
																		<option value='2' >TOEFL General</option>
																		<option value='3' >TOEFL Listening</option>
																		<option value='4' >TOEFL Structure</option>
																		<option value='5' >TOEFL Reading</option>
																		<option value='6' >Diagnóstico Matemáticas (DGES)</option>
									 
								</select>
							</div>
						</div>
						<div class='form-group'>
							<label class='col-sm-4 col-md-3 control-label' for='exam_presentation_mode'>Modo de presentación</label>
							<div class='col-sm-7 col-md-9'>
								<select name='exam_presentation_mode' id='exam_presentation_mode' class='form-control'>
																		<option value='1' >Un reactivo a la vez</option>
									 
								</select>
							</div>
						</div>
						<div class='form-group'>
							<label class='col-sm-4 col-md-3 control-label' for='exam_tags'>Etiquetas</label>
							<div class='col-sm-7 col-md-9'>
								<input name='exam_tags' id='exam_tags' type='text' class='form-control tags-field' value="">
								<p class='help-block'>Palabras para categorizar el examen</p>
							</div>
						</div>

						<div class='form-group'>
							<label class='col-sm-4 col-md-3 control-label' for='coordinated_exam'>Examen coordinado</label>
							<div class='col-sm-7 col-md-9'>
								<div class='row'>
									<div class='col-xs-1'>
										<input name='coordinated_exam' id='coordinated_exam' type='checkbox' class='form-control' >
									</div>
									<div class='col-xs-11'>
										<select class='form-control' name='coordinate_school' id='coordinate_school'>
                                                                                    </select>
									</div>
								</div>
								<p class='help-block'>Seleccione la casilla si quiere que el examen sea aplicado por todos los profesores de la escuela seleccionada</p>
							</div>
						</div>			

						<hr/>
						<div class="general_feedback">
							<div class='form-group'>
								<label class='col-sm-4 col-md-3 control-label' for='general_feedback1'>Retroalimentación<br>(0-50%)</label>
								<div class='col-sm-7 col-md-9'>
									<textarea name='general_feedback1' id='general_feedback1' class='form-control summernote' onload="section_summernote();">
																			</textarea>
									<p class='help-block'>Retroalimentacion para calificación entre 0 y 50% (opcional)</p>
								</div>
							</div>
							<div class='form-group'>
								<label class='col-sm-4 col-md-3 control-label' for='general_feedback2'>Retroalimentación<br>(51-70%)</label>
								<div class='col-sm-7 col-md-9'>
									<textarea name='general_feedback2' id='general_feedback2' class='form-control summernote' onload="section_summernote();">
																			</textarea>
									<p class='help-block'>Retroalimentacion para calificación entre 51 y 70% (opcional)</p>
								</div>
							</div>
							<div class='form-group'>
								<label class='col-sm-4 col-md-3 control-label' for='general_feedback3'>Retroalimentación<br>(71-90%)</label>
								<div class='col-sm-7 col-md-9'>
									<textarea name='general_feedback3' id='general_feedback3' class='form-control summernote' onload="section_summernote();">
																			</textarea>
									<p class='help-block'>Retroalimentacion para calificación entre 71 y 90% (opcional)</p>
								</div>
							</div>
							<div class='form-group'>
								<label class='col-sm-4 col-md-3 control-label' for='general_feedback4'>Retroalimentación<br>(91-100%)</label>
								<div class='col-sm-7 col-md-9'>
									<textarea name='general_feedback4' id='general_feedback4' class='form-control summernote' onload="section_summernote();">
																			</textarea>
									<p class='help-block'>Retroalimentacion para calificación entre 91 y 100% (opcional)</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div> <!-- /divDatosGenerales -->
			                        			
			
			 <!-- /Secciones -->
		</div>
	</div>
</form>
<script>
    var sectionCount = 0;
    var groupCount = 0;
    var questionCount = 0;
    var qTypeOptions = [{"id":"2","type":"Abierta corta","type_standard_chars":"abierta_corta","created":"2016-01-22 16:56:53","modified":"2016-01-22 16:56:55"},{"id":"3","type":"Opci\u00f3n m\u00faltiple","type_standard_chars":"opcion_multiple","created":"2016-01-22 16:57:05","modified":"2016-01-22 16:57:08"},{"id":"4","type":"Falso y Verdadero","type_standard_chars":"falso_y_verdadero","created":"2016-01-22 16:57:21","modified":"2016-01-22 16:57:24"},{"id":"5","type":"Completar","type_standard_chars":"completar","created":"2016-01-22 16:58:23","modified":"2016-01-22 16:58:25"},{"id":"6","type":"Relacionar","type_standard_chars":"relacionar","created":"2016-01-22 16:58:23","modified":"2016-01-22 16:58:25"},{"id":"7","type":"Selecci\u00f3n m\u00faltiple","type_standard_chars":"seleccion_multiple","created":"2019-04-08 17:36:23","modified":"2019-04-08 17:36:25"}]</script>
<script type="text/javascript" src="https://evpraxis.ucol.mx/app/libs/js/MathJax/MathJax.js?config=TeX-MML-AM_CHTML"></script>
        </section>
</div>
`
})