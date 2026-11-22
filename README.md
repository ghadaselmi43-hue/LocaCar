# Configuration Prisma

`prisma migrate dev` a besoin d'une base shadow distincte de la base de
l'application. La configuration Prisma utilise automatiquement le même hôte
et les mêmes identifiants que `DATABASE_URL`, avec le suffixe `_shadow` sur le
nom de la base. Pour une base d'application nommée `LocaCar`, demandez à un
administrateur MySQL de créer `LocaCar_shadow` et d'accorder les droits à
l'utilisateur utilisé par `DATABASE_URL` :

```sql
CREATE DATABASE LocaCar_shadow;
GRANT ALL PRIVILEGES ON LocaCar_shadow.* TO 'UTILISATEUR'@'localhost';
```

Remplacez `UTILISATEUR` et l'hôte par ceux de votre compte MySQL. L'URL shadow
doit utiliser les mêmes identifiants que `DATABASE_URL`, mais cibler
`LocaCar_shadow` et non `LocaCar`. N'utilisez jamais la même base pour les deux
URLs. Les caractères spéciaux dans le nom d'utilisateur ou le mot de passe
doivent être encodés dans l'URL.