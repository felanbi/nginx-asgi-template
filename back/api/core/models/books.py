from tortoise import fields, models


class Book(models.Model):
    id = fields.IntField(primary_key=True)
    author = fields.ForeignKeyField("models.Author")
    title = fields.TextField()
    year = fields.IntField()

    class Meta:
        table = "api_book"
