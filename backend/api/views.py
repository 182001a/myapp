from rest_framework import generics, viewsets

from .models import Sample
from .serializers import SampleSerializer

# Create your views here.
# class CreateSample(generics.CreateAPIView):
#     queryset = Sample.objects.all()
#     serializer_class = SampleSerializer

# class UpdateSample(generics.UpdateAPIView):
#     queryset = Sample.objects.all()
#     serializer_class = SampleSerializer

# class ListSample(generics.ListAPIView):
#     queryset = Sample.objects.all()
#     serializer_class = SampleSerializer

class SampleViewSet(viewsets.ModelViewSet):
    queryset = Sample.objects.all()
    serializer_class = SampleSerializer