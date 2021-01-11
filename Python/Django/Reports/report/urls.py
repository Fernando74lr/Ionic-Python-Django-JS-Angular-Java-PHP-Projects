from django.urls import path
from . import views

urlpatterns = [
    # Report
    path('reports/', views.reports, name='reports'),
    path('reports/clients', views.get_clients, name='clients')
]