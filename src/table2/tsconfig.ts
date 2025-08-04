/*
le fichier de configuration tsconfig est un fichier json permettant de configurer le compilateur de typescript 

Explication clef sur le fichier tsconfig
  -include : La propriété « include » indique au compilateur la liste des fichiers à inclure. Elle autorise les motifs de type « glob », tels que « * » pour tout sous-répertoire, « » pour tout nom de fichier et « ? » pour les caractères optionnels.

  -file : La propriété « files » indique au compilateur une liste de fichiers qui doivent toujours être inclus dans le programme.
  -noEmitOnError : cette propriete nous permet de generer du code source js meme en cas d'erreur si c'est en false . Si c'est en true , au fichier js ne sera generer s'il y ades erre
  -removeComments : c'est une propriete qui permet de supprimer les commentaires lors de la conversion du typescript en javascript . cette propriete peut prendre la valeur false et true . 
  -rootDir : c'est une propriete qui permet de specifier le repertoire racine de notre projet . 
  

  Exclure des fichiers lors de la transpilation : 
  
*/

