from django.views.generic import TemplateView

class MainTemplate(TemplateView):
	template_name = 'main.html'

	def get_context_data(self, **kwards):
		context = super(MainTemplate, self).get_context_data(**kwards)
		return context

class MainPageView(MainTemplate):
	template_name = 'main_page.html'

	def get_context_data(self, **kwards):
		context = super(MainPageView, self).get_context_data(**kwards)
		return context