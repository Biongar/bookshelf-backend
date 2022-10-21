from django.contrib import admin

from .models import User


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    pass

admin.site.site_header = 'Администрирование "Книжный шкаф"'
admin.site.site_title = 'Книжный шкаф'