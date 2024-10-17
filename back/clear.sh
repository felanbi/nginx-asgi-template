find **/migrations -type f ! -name __init__.py | xargs rm -f
rm -f db.sqlite3