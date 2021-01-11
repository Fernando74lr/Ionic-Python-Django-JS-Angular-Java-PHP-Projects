from django.urls import path
from . import views

urlpatterns = [
    # Report
    path('reports/', views.reports, name='reports')
]