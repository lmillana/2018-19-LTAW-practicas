# Generated by Django 2.1.7 on 2019-03-04 18:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mi_tienda', '0002_auto_20190304_1138'),
    ]

    operations = [
        migrations.CreateModel(
            name='Paris',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('precio', models.FloatField()),
                ('stock', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Pisa',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('precio', models.FloatField()),
                ('stock', models.IntegerField()),
            ],
        ),
    ]