# Generated by Django 2.1 on 2018-08-20 19:46

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('showtime', '0003_auto_20180817_1906'),
    ]

    operations = [
        migrations.AddField(
            model_name='show',
            name='show_main_url',
            field=models.TextField(default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]
