# Generated by Django 4.1.1 on 2022-09-27 15:41

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='user',
            options={'ordering': ('email',), 'verbose_name': 'пользователь', 'verbose_name_plural': 'пользователи'},
        ),
    ]
