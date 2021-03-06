# Generated by Django 2.1 on 2018-08-17 18:35

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Actor',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('actor_name', models.CharField(max_length=70)),
                ('actor_age', models.CharField(max_length=20)),
                ('actor_photo_url', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Show',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('show_name', models.CharField(max_length=100)),
                ('show_photo_url', models.TextField()),
                ('show_actor', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='shows', to='showtime.Actor')),
            ],
        ),
    ]
