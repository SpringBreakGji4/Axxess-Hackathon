import json
import logging
import time
from pymongo import MongoClient
import pandas as pd
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import confusion_matrix
from bson.json_util import dumps, loads
from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)

		
CONNECTION = "mongodb+srv://adminshrimp:wvVOOOX6R0wHInmv@jwht.qlfycbo.mongodb.net/test"
DATABASE_NAME = "axxess"
DATA = "diabetes"
INPUT = "inputData"
OUTPUT = "outputData"	
client = MongoClient(CONNECTION)
myDatabase = client[DATABASE_NAME]
inputCollection = myDatabase[INPUT]
outputCollection = myDatabase[OUTPUT]
dataCollection = myDatabase[DATA]
X = pd.DataFrame()
model = ''
sensitivity=0
specificity=0
accuracy=0
precision=0


def train():
	dataInfo = dataCollection.find()
	json_data = dumps(list(dataInfo))
	data = pd.read_json(json_data)
	print(data)
	global X
	X = data.drop('class', axis=1).drop('_id', axis=1).drop('Age', axis=1)
	y = data['class']
	print("Features:")
	print(X)
	print("Labels:")
	print(y)	
	X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
	global model
	model = LogisticRegression(max_iter=1000)
	model.fit(X_train, y_train)	
	y_pred = model.predict(X_test)
	cm = confusion_matrix(y_test, y_pred)
	print("Confusion Matrix:")
	print(cm)
	
	global sensitivity
	global specificity
	global accuracy
	global precision	

	sensitivity = cm[1, 1] / (cm[1, 1] + cm[1, 0])
	specificity = cm[0, 0] / (cm[0, 0] + cm[0, 1] )
	accuracy = (cm[0, 0] + cm[1, 1]) / sum(sum(cm))
	precision = cm[1, 1] / (cm[1, 1] + cm[0, 1])

	print("Sensitivity:", sensitivity)
	print("Specificity:", specificity)
	print("Accuracy:", accuracy)
	print("Precision:", precision)
	print("Ready to calculate ... ")
		
#def update(self):
	#rec = self.dataCollection.insert_one(item_1)
	#self.train()
	


@app.route('/predict', methods=['POST'])
def predict():
	global X
	global model
	print("start predict ...")
	data = request.get_json()
	print(data)
	data_list = [[
			int(data['gender']),
			int(data['polyuria']),
			int(data['polydipsia']),
        		int(data['suddenWeightLoss']),
        		int(data['weakness']),
        		int(data['polyphagia']),
        		int(data['genitalThrush']),
        		int(data['visualBlurring']),
        		int(data['itching']),
        		int(data['irritability']),
        		int(data['delayedHealing']),
        		int(data['partialParesis']),
        		int(data['muscleStiffness']),
        		int(data['alopecia']),
        		int(data['obesity'])
    	]]
	#print("data list : ", data_list)
	print("X : ",X)
	df = pd.DataFrame(data_list, columns=X.columns).T
	y_pred = model.predict([df.loc[:,0]])		
	#print("predict : ", y_pred.tolist()[0])
	if(y_pred.tolist()[0] == 1):
		print("True")
		return jsonify({"predictions":"yes"})
	#	bol = True
	#	print("True")
	else:
		print("False")
		return jsonify({"predictions":"no"})
	#	bol = False	
	#	print("False")
	#return jsonify({"predictions":bol})
	#return jsonify({"predictions": y_pred.tolist()})

@app.route('/evaluate', methods=['GET'])
def evaluate():
	#global old_y_pred
	# Make predictions on the testing data
	#y_pred = model.predict(X_test)

	# Return evaluation metrics as JSON response
	global sensitivity
	global specificity
	global accuracy
	global precision
	return jsonify({
		"sensitivity": sensitivity,
		"specificity": specificity,
		"accuracy": accuracy,
		"precision": precision
	})
		

if __name__ == "__main__":
	try:
		#print("ready to start")
		#global app
		train()
		cors = CORS(app)
		app.run(debug=True)
		#app.run(host="localhost",port=3000,debug=True)
		#train()
	except Exception as exception:
                logging.error("%s: %s", exception.__class__.__name__, exception)





