import random
import time


def year2023(conocimiento=0):
    rendirse = False
    estado = [
        "Soy muy bueno",
        "Burnout",
        "La AI es mejor que yo",
        "Soy el mejor",
        "SIndrome del impostor",
    ]
    for dia in range(1, 366):
        print(f"Dia {dia} de 2023")
        print(random.choice(estado))

        if rendirse:
            raise Exception()

        if dia == 365:
            print("No subir production")

        time.sleep(60 * 60 * 24)

        conocimiento += 1


# this is just for testing the pallet colors  of my vscode dark theme
