# Generated by Django 2.1 on 2018-08-22 16:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('showtime', '0004_show_show_main_url'),
    ]

    operations = [
        migrations.CreateModel(
            name='Comments',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
                ('message', models.CharField(max_length=300)),
            ],
        ),
    ]