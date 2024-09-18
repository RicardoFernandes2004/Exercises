import sys
import json
import joblib
import numpy as np
import warnings

# Suprimir avisos
warnings.filterwarnings("ignore")

# Carregar o modelo salvo
model = joblib.load('race_predictor_model.pkl')

def predict_chances(data):
    features = np.array([data['avg_position'], data['avg_points']])
    features = features.reshape(1, -1)

    prediction = model.predict_proba(features)
    return prediction[0]  # Retorna as probabilidades

if __name__ == "__main__":
    # Verificar se os argumentos foram passados corretamente
    if len(sys.argv) > 1:
        try:
            data = json.loads(sys.argv[1])  # Deserializar o JSON
            prediction = predict_chances(data)
            # Retorna apenas o JSON
            print(json.dumps(prediction.tolist()))  # Certifique-se de que o resultado seja impresso como JSON
        except Exception as e:
            # Retornar erro como JSON
            print(json.dumps({"error": str(e)}))
    else:
        print(json.dumps({"error": "Nenhum argumento foi passado. Por favor, forneça os dados em formato JSON."}))
