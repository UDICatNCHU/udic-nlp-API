from django.db import models


class Course(models.Model):
    school = models.CharField(max_length=20, default='')
    semester = models.CharField(max_length=4, default='')
    code = models.CharField(max_length=20, default='', unique=True)
    credits = models.FloatField(default=0)
    title = models.CharField(max_length=40, default='')
    professor = models.CharField(max_length=20, default='')
    time = models.CharField(max_length=20, default='')
    location = models.CharField(max_length=20, default='')
    department = models.CharField(max_length=20, default='')
    obligatory = models.BooleanField(default=True)
    note = models.CharField(max_length=50, default='')
    discipline = models.CharField(max_length=20, default='')
    category = models.CharField(max_length=3, default='')

    def __str__(self):
        return '({}){}/{}'.format(self.semester, self.code, self.title)
