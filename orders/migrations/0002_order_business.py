# Generated by Django 3.1.2 on 2020-11-08 05:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='business',
            field=models.CharField(default='default', max_length=100),
        ),
    ]
