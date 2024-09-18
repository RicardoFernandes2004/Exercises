import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
import joblib

# Carregar os dados históricos de corridas
data = pd.read_csv('projetos FIAP/Python/O.o/techrace-backend/IA/formula_e_race_results.csv')

# Criar sistema de pontuação baseado no rank_num
def calculate_points(rank):
    if rank == 1:
        return 25
    elif rank == 2:
        return 18
    elif rank == 3:
        return 15
    elif rank == 4:
        return 12
    elif rank == 5:
        return 10
    elif rank == 6:
        return 8
    elif rank == 7:
        return 6
    elif rank == 8:
        return 4
    elif rank == 9:
        return 2
    elif rank == 10:
        return 1
    else:
        return 0

# Adicionar uma coluna de pontuação
data['points'] = data['rank_num'].apply(calculate_points)

# Calcular a média de posição e a média de pontuação por piloto
avg_position = data.groupby('driver')['rank_num'].mean()
avg_points = data.groupby('driver')['points'].mean()

# Criar o dataset final com as médias
data_final = pd.DataFrame({
    'driver': avg_position.index,
    'avg_position': avg_position.values,
    'avg_points': avg_points.values
})

# Criar variável de saída (y) como 1 se o piloto venceu pelo menos uma vez, 0 caso contrário
# Isto precisa ser consistente com o agrupamento feito em 'data_final'
data['won_race'] = (data['rank_num'] == 1).astype(int)
y = data.groupby('driver')['won_race'].max()  # Verifica se o piloto já venceu pelo menos uma vez

# Agora, X e y devem ter o mesmo número de amostras
X = data_final[['avg_position', 'avg_points']]

# Dividir os dados em treino e teste
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3)

# Treinar o modelo
model = RandomForestClassifier()
model.fit(X_train, y_train)

# Avaliar o modelo
accuracy = model.score(X_test, y_test)
print(f'Precisão do modelo: {accuracy * 100:.2f}%')

# Salvar o modelo
# OBS: Trocar o caminho do arquivo para o absoluto em seu pc
joblib.dump(model, 'C:/Users/a1197/Desktop/projetos/projetos FIAP/Python/O.o/techrace-backend/IA/race_predictor_model.pkl')

