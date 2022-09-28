from django_filters import FilterSet

from .models import Book

class BookFilterSet(FilterSet):
    class Meta:
        model = Book
        exclude = ('photo', )