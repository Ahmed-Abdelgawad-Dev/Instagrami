# Generated by Django 4.0.2 on 2022-03-20 00:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_alter_post_img'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='img',
            field=models.ImageField(blank=True, default='static/images/No-Image.jpg', upload_to='images/'),
        ),
    ]
