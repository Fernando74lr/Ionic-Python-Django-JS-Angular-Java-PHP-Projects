from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request, 'core/index.html')

def reports(request):
    return render(request, 'core/reports.html')