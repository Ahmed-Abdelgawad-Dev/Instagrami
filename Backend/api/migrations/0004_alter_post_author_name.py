# Generated by Django 4.0.2 on 2022-03-20 16:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_alter_post_author_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='author_name',
            field=models.CharField(max_length=100),
        ),
    ]
