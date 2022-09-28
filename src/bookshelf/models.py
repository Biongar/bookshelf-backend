from django.db import models
from django.contrib.auth import get_user_model

from .utils import user_directory_path

User = get_user_model()

class RatingChoices(models.IntegerChoices):
    ONE = 1, '1'
    TWO = 2, '2'
    THREE = 3, '3'
    FOUR = 4, '4'
    FIVE = 5, '5'
    SIX = 6, '6'
    SEVEN = 7, '7'
    EIGHT = 8, '8'
    NINE = 9, '9'
    TEN = 10, '10'
    
class Book(models.Model):
    title = models.CharField(max_length=30, blank=True, null=True, verbose_name='название')
    description = models.TextField(max_length=4080, blank=True, null=True, verbose_name='описание')
    author = models.CharField(max_length=30, blank=True, null=True, verbose_name='автор')
    photo = models.ImageField(upload_to=user_directory_path, blank=True, null=True, verbose_name='фото')
    rating = models.IntegerField(choices=RatingChoices.choices, blank=True, null=True, verbose_name='рейтинг')
    is_read = models.BooleanField(verbose_name='прочитано', blank=True, null=True)
    user_created = models.ForeignKey(User, on_delete=models.CASCADE, verbose_name='пользователь')
    
    date_created = models.DateTimeField(auto_now_add=True, verbose_name='дата создания')
    date_updated = models.DateTimeField(auto_now=True, verbose_name='дата обновления')
    
    
    def __str__(self):
        return self.title
    
    class Meta:
        verbose_name = 'книга'
        verbose_name_plural = 'книги'
        ordering = ('-date_updated', 'title')
