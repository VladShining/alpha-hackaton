import speech_recognition as sr

#r = sr.Recognizer()
#m = sr.Microphone()

def reconnaissance_vocale():
    recognizer = sr.Recognizer()

    with sr.Microphone() as source:
        print("Dites quelque chose...")
        recognizer.adjust_for_ambient_noise(source)
        audio = recognizer.listen(source, timeout=5)

    try:
        print("Analyse en cours...")
        texte = recognizer.recognize_google(audio, language="fr-FR")
        print("Vous avez dit : {}".format(texte))
    except sr.UnknownValueError:
        print("Désolé, je n'ai pas pu comprendre.")
    except sr.RequestError as e:
        print("Erreur lors de la requête à l'API Google : {}".format(e))

if __name__ == "__main__":
    reconnaissance_vocale()

