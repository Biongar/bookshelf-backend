from rest_framework.serializers import ModelSerializer, PrimaryKeyRelatedField

from djoser.serializers import UserSerializer
from .models import Book

class BookSerializer(ModelSerializer):
    user_created = UserSerializer(read_only=True)
    class Meta:
        model = Book
        fields = '__all__'