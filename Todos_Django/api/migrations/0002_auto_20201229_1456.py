# Generated by Django 3.1.2 on 2020-12-29 20:56

import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):
	dependencies = [
		('api', '0001_initial'),
	]

	operations = [
		migrations.AddField(
			model_name='todo',
			name='isComplete',
			field=models.BooleanField(default=False),
		),
		migrations.AddField(
			model_name='todo',
			name='name',
			field=models.CharField(default=django.utils.timezone.now,
			                       max_length=255),
			preserve_default=False,
		),
	]
