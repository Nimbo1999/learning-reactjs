from django.db import models

class Cliente(models.Model):
    nome = models.CharField(max_length=50)
    endereco = models.CharField(max_length=50)
    idade = models.IntegerField()
    imagem = models.ImageField(upload_to='clientes', null=True, blank=True)

    def __str__(self):
        return self.nome