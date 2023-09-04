from django.urls import path, include
from rest_framework.routers import DefaultRouter

from . import views

app_name = 'api'

router = DefaultRouter()
router.register('sample', views.SampleViewSet)

urlpatterns = [
    # path('create', views.CreateSample.as_view(), name='create'),
    # path('update/<pk>', views.UpdateSample.as_view(), name='update'),
    path('', include(router.urls)),
]
