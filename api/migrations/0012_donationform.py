# Generated by Django 3.1.4 on 2022-03-29 07:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0011_auto_20220328_1658'),
    ]

    operations = [
        migrations.CreateModel(
            name='DonationForm',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('description', models.TextField()),
                ('image', models.ImageField(upload_to='DonationForm/')),
                ('type', models.CharField(max_length=255)),
                ('raised', models.IntegerField()),
                ('goal', models.IntegerField()),
                ('milestone', models.IntegerField()),
            ],
        ),
    ]