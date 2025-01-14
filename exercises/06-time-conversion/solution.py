def timeConversion(s):
    # Verificar si los dos primeros elementos son 12 y si los dos últimos son AM
    if s[:2] == "12" and s[-2:] == "AM":
        return f"00{s[2:-2]}"
    # Si solo tiene el AM sin que los dos primeros sean 12 entonces remover el AM
    elif s[-2:] == "AM":
        return s[:-2]
    # Verificar si es PM y si es 12
    elif s[:2] == "12" and s[-2:] == "PM":
        return s[:-2]
    # Si es PM y no es 12, sumar 12 a los dos primeros elementos
    else:
        return str(int(s[:2]) + 12).zfill(2) + s[2:-2]


# Pruebas
print(timeConversion("05:05:20PM"))  # 17:05:20
print(timeConversion("12:00:00AM"))  # 00:00:00
print(timeConversion("12:00:00PM"))  # 12:00:00
print(timeConversion("01:00:00PM"))  # 13:00:00