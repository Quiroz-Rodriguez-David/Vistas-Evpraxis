Vue.component('editor',{
		template:`
<div>
		<div class="row">
			<div class="col-md-12">
				<h1 class="SectionTitle">Exámenes</h1>
			</div>
		</div>
		<div class="row">
			<div class="col-md-3">
				<!--?php if( $this->hasAtLeastOneRole( array('Profesor', 'Coordinador') ) ): ?-->
					<!-- Opciones para profesor -->
				<div class="well">
					<button type="button" class="btn btn-success btn-sm btn-block btn-ex-NewExam">
						<i class="fa fa-file-text fa-lg fa-fw pull-left" aria-hidden="true"></i>
						Crear examen
					</button>
						<!--?php if( $this->hasAtLeastOneRole( array('Profesor') ) ): ?-->
					<button type="button" class="btn btn-primary btn-sm btn-block btn-word-wrap newApp">
						<i class="fa fa-calendar-plus-o fa-lg fa-fw pull-left" aria-hidden="true"></i>
						Agendar examen
					</button>
					<!--?php endif; ?-->
				</div>
				<!--?php endif; ?-->
			</div>
		</div>
</div>
`
	});
