from .models import Cliente
from .serializers import ClienteSerializer
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework import status


class ClienteViewSet(APIView):
    parser_classes = (MultiPartParser, FormParser)

    def get(self, request, *args, **kwargs):
        cliente = Cliente.objects.all()
        serializer = ClienteSerializer(cliente, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        cliente_serializer = ClienteSerializer(data=request.data)
        if cliente_serializer.is_valid():
            cliente_serializer.save()
            return Response(cliente_serializer.data, status=status.HTTP_201_CREATED)
        else:
            print('error', cliente_serializer.errors)
            return Response(cliente_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class MyClientViewSet(APIView):
    parser_classes = (MultiPartParser, FormParser)

    def get(self, request, id):
        cliente = Cliente.objects.get(id = id)
        serializer = ClienteSerializer(cliente)
        return Response(serializer.data)

    def put(self, request, id):
        cliente = Cliente.objects.get(id = id)
        cliente_serializer = ClienteSerializer(cliente, data=request.data)
        if cliente_serializer.is_valid():
            cliente_serializer.save()
            return Response(cliente_serializer.data, status=status.HTTP_200_OK)
        else:
            print('error', cliente_serializer.errors)
            return Response(cliente_serializer.errors, status=status.HTTP_400_BAD_REQUEST)