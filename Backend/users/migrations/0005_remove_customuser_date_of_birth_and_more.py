# Generated by Django 4.0.2 on 2022-03-12 22:49

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0004_myuser'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='customuser',
            name='date_of_birth',
        ),
        migrations.RemoveField(
            model_name='myuser',
            name='date_of_birth',
        ),
    ]
