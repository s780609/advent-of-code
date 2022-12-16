const puzzleInput = 'B Z\nC Z\nC Z\nA Y\nB Z\nC Y\nC Z\nC Y\nC X\nA Z\nB Z\nC Z\nA Y\nC Z\nB X\nC Y\nC Z\nC X\nC X\nC Y\nC Y\nC X\nA Y\nC Y\nC Y\nC X\nC Z\nC X\nA X\nC Z\nC Y\nC Z\nC Z\nC Z\nA Z\nC Z\nB Z\nA Y\nA X\nA Y\nC Z\nA Y\nC Z\nA Z\nC Y\nC Y\nC Y\nA X\nC X\nC X\nC Y\nA X\nA Y\nC X\nA X\nC Z\nA Y\nC Z\nC Y\nA Y\nC Z\nA X\nA Y\nA X\nC X\nC Z\nA X\nB Z\nC Z\nC Y\nC X\nC X\nC Z\nC X\nC Z\nA X\nC Y\nA Y\nC Y\nC Z\nC X\nB X\nB Z\nC Z\nC X\nA X\nB Z\nA Y\nA Y\nB Z\nA Y\nC Y\nB Z\nB X\nC X\nC X\nC X\nA X\nA Z\nA Y\nA Y\nC Y\nC Z\nC Z\nC Z\nA Y\nC X\nA Y\nA X\nC X\nC X\nA X\nA Y\nA X\nA X\nA Y\nC Y\nA Y\nA Y\nA X\nC X\nB Z\nA X\nC Y\nC X\nC Z\nC Z\nC Z\nC Z\nC Y\nC X\nC X\nA X\nA Y\nA X\nC Z\nC X\nC Y\nC Y\nC Z\nC Z\nB Z\nC Z\nC Y\nC X\nC Y\nA X\nA Y\nC X\nB Z\nB Y\nC Z\nC Y\nC X\nA Y\nC Y\nB Z\nA Z\nC X\nC Z\nC Y\nC X\nC Z\nA X\nA Y\nC Y\nC Y\nA Y\nA X\nA X\nC X\nC X\nC Z\nA Y\nA Y\nC Y\nC Z\nA X\nA Y\nC X\nC X\nC Y\nC X\nC Z\nC X\nC Z\nC Z\nC Z\nC Z\nA Y\nB Z\nC Y\nC Z\nA Z\nC X\nC X\nA X\nA Z\nC Z\nC X\nC Z\nA X\nB Z\nB Z\nA X\nC X\nC X\nB Z\nB Z\nB Z\nC Z\nC X\nA Y\nC Z\nA X\nC Y\nC Z\nC Z\nC X\nC X\nC Z\nC Y\nC Y\nC X\nC X\nA X\nC Y\nA X\nC Y\nC X\nB X\nB Z\nC X\nC X\nB X\nC Z\nC Y\nA X\nC Z\nC Z\nC Z\nC Y\nC X\nA Y\nA Z\nC Z\nB Z\nC Z\nC X\nA Y\nC X\nC X\nA X\nC X\nC Z\nA X\nC Z\nC Y\nC Y\nC Y\nC Z\nA X\nC Y\nC X\nC Z\nA X\nC Z\nC X\nC X\nC X\nA Y\nC Z\nA Y\nC Z\nC Y\nC Z\nA Y\nC X\nC X\nC X\nC Y\nC Z\nC X\nC Y\nC X\nA X\nC X\nC Y\nC X\nC Z\nC X\nB Z\nC X\nB Z\nB X\nC X\nC X\nC X\nB X\nA Y\nA Y\nA X\nB Z\nC X\nA Z\nC Y\nC X\nC X\nC Y\nA Y\nA Z\nC X\nA Y\nC Z\nC X\nC X\nC Y\nC Y\nA Z\nA X\nC Z\nC X\nC Z\nB Y\nA Y\nC Z\nA Y\nC Z\nA X\nC Y\nC Y\nC X\nA Y\nC X\nC X\nB X\nC Z\nC X\nC Y\nC Z\nC Z\nC Y\nC Y\nC Y\nC X\nB Z\nC X\nC X\nC Y\nC Y\nC Z\nB Z\nC X\nC Y\nB Z\nC Z\nA Y\nC X\nC X\nA Y\nC Y\nC Z\nC X\nA Y\nA Y\nC Z\nC Z\nC Z\nA X\nC X\nC Z\nC Z\nC Z\nA Y\nA X\nC X\nC Z\nC X\nC X\nC Y\nA Y\nC X\nC Y\nC Z\nC Y\nA X\nC X\nC X\nC Z\nA X\nB X\nC Y\nA X\nC Y\nC Y\nC X\nC Z\nB X\nC X\nC Z\nA Y\nC Z\nC X\nA X\nC Y\nA X\nC Z\nA X\nC X\nC Y\nC X\nC Z\nC X\nC X\nC Y\nA X\nC Y\nA Y\nC Z\nC X\nC X\nA X\nA Z\nC X\nC X\nC Y\nB Z\nA X\nA X\nC X\nB Z\nC Z\nA Y\nC Y\nC Z\nC X\nA Z\nC Y\nA X\nC Y\nC Z\nC Z\nC X\nC Y\nC X\nC Y\nC Y\nC X\nA Y\nB X\nC X\nA X\nA Y\nC Y\nC Z\nC Y\nC X\nA Y\nC Z\nC X\nC X\nA Z\nC Y\nC Z\nA X\nC X\nC Z\nA Y\nA X\nB X\nC Z\nB Z\nC X\nA Z\nC Z\nA X\nA Y\nC X\nA X\nB Z\nC X\nC Y\nC Z\nC Y\nC Y\nC Z\nC X\nB X\nC Y\nB Y\nC Z\nA Y\nA Y\nC Y\nC Z\nA X\nC Z\nC Y\nB Z\nC X\nA X\nC X\nC X\nC Y\nC Y\nC Z\nA Y\nC Z\nA X\nA Y\nC X\nC Y\nC Z\nC X\nA X\nB Z\nC Z\nA X\nC X\nC X\nC X\nB Z\nC Z\nC Y\nB Z\nA X\nC Z\nC Y\nA X\nC X\nB Z\nC Y\nC X\nC Z\nC Z\nC Z\nC X\nC Y\nB X\nA X\nB Z\nC X\nC Y\nC Z\nC X\nC Z\nC Z\nC Z\nC Y\nA X\nC X\nC Z\nA X\nC X\nC Z\nB X\nC Z\nB Z\nA Y\nA X\nC Z\nC Z\nC Y\nC Z\nC Y\nC Z\nA Y\nB Z\nA Y\nC X\nA X\nA X\nA X\nB Z\nC Z\nB Y\nC Y\nA Y\nA Y\nC Z\nA Y\nC Z\nC Z\nA Y\nC Z\nC Z\nC Z\nA Y\nC Z\nC Z\nC Z\nC Z\nA Y\nC Y\nA Y\nC Y\nC X\nC X\nC Z\nC X\nC Z\nC Y\nA X\nC Z\nB X\nC Z\nA X\nC Z\nC Z\nC Y\nC Z\nC Y\nC X\nC Y\nB X\nC Z\nC X\nC Y\nA Y\nC X\nC Z\nC X\nC Z\nC X\nA Z\nC Z\nC X\nC X\nB Z\nC Z\nC X\nA X\nC Y\nA Y\nC X\nC Z\nC Z\nA Y\nA X\nB Y\nC Y\nC Y\nC Y\nC X\nA X\nC Z\nC Y\nC Z\nC X\nC Z\nC Z\nC Y\nB X\nC X\nC Z\nC X\nC X\nC Y\nA X\nB Z\nA X\nC X\nC Z\nB Z\nA Y\nC Y\nB Z\nC X\nA Z\nA X\nC Z\nC Z\nC X\nA Y\nB Y\nC X\nC Z\nB Y\nA Y\nA Y\nC X\nA X\nC Y\nC X\nC X\nC Z\nA X\nA X\nA X\nB Z\nC Y\nC Z\nC X\nA X\nB Z\nC Z\nC Z\nC X\nC X\nC X\nC X\nC Z\nC Y\nC Z\nC Z\nC Z\nA Y\nC Z\nC X\nC Y\nC X\nB Y\nA Y\nC Z\nC X\nC Z\nA X\nA X\nC Y\nC Y\nC X\nC Z\nC Z\nC Z\nC X\nC Z\nC X\nC Y\nC X\nC X\nC Y\nC Y\nB Z\nC Z\nC Z\nB Z\nC Y\nC Z\nC Y\nB Z\nC X\nC Z\nC Y\nC Z\nA Y\nC Z\nB Z\nC Z\nC X\nC X\nA Z\nC Z\nC X\nA Y\nA Z\nA X\nC Y\nC X\nC Z\nC X\nC X\nC Y\nC X\nC Z\nC X\nC Y\nC Y\nC Z\nC Y\nC Y\nC Y\nA Z\nA Y\nC Z\nC Y\nC Z\nC X\nA X\nC Z\nC Z\nA Y\nC Z\nC X\nC X\nC X\nC Z\nC X\nC Z\nC Y\nA Z\nC Z\nC Y\nC Z\nC X\nC Y\nC Y\nC X\nC X\nC Z\nA Y\nC Y\nB Z\nA Y\nC Y\nC X\nC Z\nC X\nC Y\nC Z\nA Y\nA X\nC Z\nB Y\nC Y\nA X\nC Y\nC Z\nB Z\nC Y\nC Z\nC Z\nB Z\nC X\nA Y\nC Z\nC X\nB Y\nB Z\nC Z\nB Z\nC X\nA X\nA X\nB Z\nC Z\nC Z\nC Z\nC Y\nA Y\nC Z\nB X\nC Y\nA Z\nC Y\nC Y\nA Y\nC X\nC Y\nB Z\nC X\nC X\nC X\nB Z\nC X\nB Z\nA X\nC Y\nC Y\nA X\nC X\nA Y\nC X\nA X\nC Z\nA X\nC X\nC X\nA Y\nC Z\nC Z\nC X\nC X\nB Z\nA Y\nC Y\nC X\nA Y\nC Z\nA X\nC X\nB Z\nC X\nC X\nB X\nB X\nB Z\nC Z\nC X\nA Y\nB Z\nB Y\nC X\nC Z\nA Y\nC Z\nC X\nC X\nB Z\nC X\nA Y\nA X\nA Z\nC Z\nC Y\nB Z\nC X\nA X\nC X\nA X\nC X\nC X\nC Z\nA X\nB Z\nC Z\nC X\nC X\nA X\nC Z\nC X\nC X\nC Z\nC Y\nC X\nA X\nC X\nC X\nC X\nA X\nC Z\nC Z\nC Y\nB Z\nC X\nA Y\nC Z\nC X\nC Y\nB X\nA X\nC X\nB Z\nC Y\nB X\nA Y\nB X\nC Z\nC Y\nC X\nC Z\nA Y\nA Y\nC X\nA X\nC X\nC X\nA Y\nA X\nB X\nC Y\nA Y\nC X\nC Z\nA Y\nC Z\nB Z\nC Z\nA X\nC Y\nC Y\nC Y\nA Y\nA Z\nA Y\nC X\nC X\nA Y\nC Y\nA X\nC Y\nA Y\nC X\nC Y\nB Z\nC Z\nC Z\nB X\nC Y\nB X\nA Y\nA Y\nA X\nA Y\nC Z\nC Z\nC Y\nB Z\nA Z\nC X\nC Z\nA X\nC X\nC X\nC Z\nC Y\nC X\nA Y\nC Z\nB Z\nA Y\nA X\nC Y\nB X\nC Z\nA Y\nC X\nC Y\nC X\nA X\nC Z\nC Z\nC X\nC Z\nA X\nC X\nC X\nA Z\nB Z\nA X\nC Y\nC X\nA X\nC X\nC Z\nC Y\nA Y\nC X\nA Y\nA X\nC Y\nA Y\nC X\nA Y\nC X\nB Z\nC X\nC X\nC X\nC Z\nC Z\nC Z\nB Z\nC X\nB Z\nC X\nA X\nA Y\nA Y\nA X\nC Y\nA X\nC Y\nA Y\nB Z\nC X\nC X\nC Y\nC X\nC Z\nA X\nA Y\nC Z\nA X\nC X\nC X\nB X\nC X\nA Y\nC X\nC Z\nB Z\nA X\nB Z\nC Y\nC Z\nC Y\nC Y\nC X\nC Z\nC Z\nC Z\nA X\nC X\nA X\nA Y\nA X\nC Z\nC Z\nA Z\nC Y\nB Z\nA X\nC Z\nC Z\nC X\nC X\nA X\nA Z\nC Z\nC X\nC X\nC Y\nC Y\nC Y\nA Y\nA Y\nC Z\nA X\nC Z\nC X\nA X\nC Y\nC Z\nC Y\nA X\nA Y\nA X\nC Z\nB Z\nC Z\nA X\nC X\nC Y\nC X\nC X\nC Y\nC Z\nC Z\nC Y\nC X\nA Y\nC Y\nC Z\nB Z\nC Y\nC Y\nA X\nC Z\nB Z\nC X\nB Z\nB Z\nC Z\nC X\nC Z\nA X\nC Z\nC X\nA Y\nA X\nA Y\nC Z\nC Z\nC Z\nC Z\nC X\nB Z\nC Y\nC X\nB Z\nC X\nA X\nA Y\nC X\nA Z\nA Y\nA X\nC Y\nC Z\nC Y\nC Z\nB Z\nC Y\nC X\nA Y\nB Z\nC Z\nC Z\nC Y\nC X\nC Z\nA Y\nC Y\nA Y\nC Z\nB Z\nC Z\nA X\nC Z\nC Z\nC Y\nC X\nC Y\nA X\nC Y\nC Z\nC X\nA X\nB Z\nC Y\nC X\nC Z\nC Y\nA X\nC X\nA Y\nA Y\nC X\nC Z\nC Y\nB Z\nB X\nC Y\nC X\nC X\nC Z\nC Y\nC X\nC Z\nC Y\nA X\nB Y\nA X\nA Y\nC X\nA X\nA X\nA X\nC Y\nB X\nB Z\nC Z\nC X\nC Z\nA Y\nC Y\nC X\nB Z\nA X\nC X\nA Y\nC X\nC X\nC X\nB Z\nC Z\nC X\nB X\nC Z\nC Y\nC X\nC Y\nC Z\nC Z\nC Z\nA X\nC X\nC X\nC X\nB Z\nC Z\nA Y\nC X\nB Z\nB Z\nA Y\nA Y\nB Z\nC X\nC Y\nA X\nC Y\nC X\nC Y\nC Y\nC X\nB Z\nC Z\nC Z\nC Z\nC Y\nA Y\nC Z\nC Y\nA X\nC X\nC Z\nC Y\nA Y\nC Z\nC X\nB Z\nC X\nC Z\nC Z\nC Y\nA X\nA Y\nC Z\nA Y\nC Z\nC X\nC Z\nC Z\nA X\nA X\nC X\nB Z\nB Z\nC Y\nA Y\nC X\nC X\nC Z\nC Z\nA Y\nC Y\nC Z\nA X\nC X\nC Y\nA Y\nC X\nC X\nA Z\nC X\nC Y\nC Z\nC X\nB Z\nC X\nA X\nC Z\nC Z\nA X\nC Z\nC Y\nC Z\nC Z\nA Y\nC X\nC X\nC X\nC Y\nC Z\nC X\nC X\nC Y\nB Z\nA X\nC X\nA Y\nB Z\nA Y\nA X\nA X\nB X\nC Y\nA Y\nC Y\nC Z\nA X\nC X\nA Y\nA Y\nC Z\nC X\nC Z\nC Z\nC Z\nC Z\nA Y\nA Y\nA X\nC X\nA Y\nC Y\nA X\nC X\nC X\nC X\nB Z\nC Z\nB Z\nA X\nC Z\nC Z\nC Y\nC X\nC X\nC X\nC Y\nA Z\nB X\nB Z\nC X\nB Z\nA X\nA Y\nC Z\nB Y\nC X\nC X\nA Y\nC Y\nC Y\nC Z\nC X\nA X\nB Z\nC X\nA X\nA X\nC X\nA X\nC Y\nB X\nC Z\nC Z\nC Z\nC Z\nC X\nC Z\nC X\nC Z\nC Z\nA X\nC Z\nC X\nB Z\nA Y\nC Z\nB Z\nC Y\nC X\nC X\nC Z\nC Y\nC X\nC Z\nC X\nB X\nC Z\nA Y\nC X\nB Z\nA Y\nA X\nC X\nC X\nB Z\nC Y\nC Z\nC X\nC Z\nC Z\nC Z\nB X\nC X\nC X\nC Y\nB Z\nA Y\nC Y\nC Z\nA Z\nA Y\nC Z\nC Y\nC Y\nA X\nB Z\nB Z\nC X\nA X\nC Z\nB Z\nC Z\nC Y\nC Z\nC Y\nA X\nC X\nC Y\nC X\nB X\nC Y\nA Y\nC X\nC Z\nA Z\nC Y\nA X\nC Z\nC Y\nB Z\nC Y\nC Z\nA Y\nC Z\nC X\nA Y\nC X\nC Z\nC X\nB Z\nC X\nA X\nC Z\nC Z\nC X\nC Z\nC X\nC Z\nC Z\nA Z\nA X\nB Z\nB X\nC Z\nC X\nB Z\nC X\nC Y\nC Z\nC Z\nA X\nA X\nC Y\nB Z\nA X\nC X\nC Z\nA Z\nA Z\nC Z\nC Y\nC X\nC Y\nC Z\nA Z\nA X\nA Y\nC X\nC Z\nA Y\nC Y\nA Y\nA X\nC Z\nC X\nC Z\nC X\nB Z\nA Y\nC X\nA X\nC X\nB X\nC X\nA X\nC X\nA X\nC Y\nA Y\nC X\nA Y\nC X\nC Z\nC X\nB Z\nA X\nC Z\nA X\nC Z\nC Z\nC Y\nC Z\nC Y\nC X\nA Y\nC X\nA X\nC Z\nC X\nA Y\nC Y\nC X\nC X\nC Z\nC X\nC Y\nC X\nC X\nC X\nC X\nA Y\nA Y\nA Y\nC Z\nC X\nB Y\nB Y\nA Y\nC Z\nC X\nA Y\nC Z\nC Y\nC X\nC Z\nA X\nC Z\nC Z\nC Y\nA X\nA X\nC Z\nC X\nC X\nC X\nC Z\nC Z\nA Y\nC Y\nA X\nB Z\nC Z\nC Y\nC Z\nA X\nC Z\nC X\nC X\nA Y\nC Z\nC X\nC Z\nC Z\nA Y\nC Y\nC Z\nA X\nC Y\nC Z\nA X\nC X\nA X\nC X\nC Z\nC X\nC Z\nC Z\nC Y\nC Y\nA Y\nC Y\nA X\nC Y\nC X\nC Z\nC X\nA X\nC X\nA X\nA Y\nA X\nC Z\nA X\nC Y\nC X\nA Y\nC Z\nC Z\nC X\nB X\nC Z\nC Y\nA Y\nB Z\nC Y\nC X\nB Z\nC X\nA Y\nA X\nA X\nA X\nC X\nA X\nC X\nC Z\nC X\nA X\nC Y\nA Y\nC X\nC Z\nC X\nC Z\nC Y\nC X\nA X\nC X\nC Y\nA Y\nA X\nB Z\nC Y\nB Z\nC Y\nC X\nA Y\nC X\nC Z\nC X\nC Y\nA X\nC Y\nC Y\nC Z\nC Y\nC X\nC Z\nC X\nC X\nC X\nC Z\nC X\nA Y\nA Y\nC X\nC Z\nB Z\nC X\nC Y\nC X\nC X\nC Z\nC Z\nC X\nC X\nA Z\nA X\nC X\nB Z\nC Z\nC Y\nC Z\nC X\nC X\nC X\nC Z\nC X\nA X\nA X\nC Z\nC X\nA Z\nC X\nA X\nA X\nC Z\nA X\nA Y\nC Z\nA Z\nA Y\nC Y\nC X\nA Y\nA X\nC Z\nC X\nA Y\nB Z\nC Z\nA X\nC Z\nC X\nA X\nA Y\nC Z\nC Y\nC Z\nC Z\nB Z\nC X\nC Z\nC Z\nC Y\nC X\nC Z\nC X\nC X\nB Z\nB Z\nA Y\nB X\nB Z\nC Z\nA Z\nC Y\nC X\nC Z\nC X\nC X\nA X\nC X\nA Y\nB X\nC Z\nC Y\nC X\nC Z\nC Y\nC Y\nC X\nB Z\nC X\nB Z\nC Y\nC Y\nC Y\nC X\nC X\nA X\nA X\nA X\nC Z\nA X\nC Z\nC X\nC Y\nC Z\nC Y\nA Y\nC Y\nA X\nA Y\nC Y\nC Z\nC Z\nA Y\nC X\nC X\nA X\nC Y\nC X\nC Y\nA X\nC X\nC Y\nC Z\nC Z\nB Z\nA Y\nC X\nB Z\nC Y\nA X\nC Z\nC X\nC Z\nB X\nC Z\nC Z\nC Z\nC X\nC Z\nC Z\nC X\nC Z\nC Z\nB X\nA X\nC Y\nC Z\nA Y\nC Y\nC Z\nC Z\nC X\nA Y\nA X\nC Y\nC Y\nA Y\nC Z\nC X\nC X\nC X\nA Y\nC X\nB X\nC Z\nC Z\nC X\nC Z\nC X\nA Y\nA Z\nC Z\nC Z\nB X\nC Y\nA Z\nA Y\nC Z\nC X\nC Z\nC X\nA X\nA Y\nC Y\nA X\nC Z\nC X\nC Z\nB X\nC X\nC Z\nB Z\nC Z\nC Y\nC Y\nA X\nC Z\nC X\nC Y\nC Z\nC Z\nA Y\nC Z\nC Y\nC Y\nA X\nB Z\nC Z\nA X\nC Y\nC Y\nC Z\nA X\nC X\nC Z\nC X\nC X\nC Z\nC Y\nC X\nC Z\nB Z\nC Y\nA X\nA X\nC X\nC Z\nA X\nC X\nB Z\nC Y\nC Z\nC Y\nC X\nC Z\nB Y\nC X\nC Z\nA X\nC X\nA X\nC X\nC Z\nB Z\nC Z\nC Z\nA Z\nC Y\nC X\nA X\nC Z\nA X\nA Y\nC X\nC Z\nC Y\nA Y\nC Y\nC X\nA X\nC X\nC Y\nC X\nC X\nC Z\nC Z\nC X\nC Z\nA X\nA X\nC X\nC Z\nB Z\nA X\nC X\nC Z\nC Y\nC X\nB Z\nC X\nC X\nC X\nB X\nC Y\nA Y\nC Z\nA Z\nA Y\nA Y\nC Y\nB Z\nC Z\nC Y\nC X\nC Z\nC X\nB Z\nB X\nA X\nA Z\nA Y\nC Z\nC Y\nC Y\nC X\nB Y\nC Y\nC X\nC X\nB X\nC Y\nC Z\nB Z\nC X\nC Y\nA Y\nC Z\nC X\nC Z\nA X\nC Z\nA X\nA Y\nC Y\nA Y\nC Y\nC Z\nA X\nC Y\nC Y\nC X\nB X\nC Z\nC X\nC Z\nC Z\nC Z\nC X\nC Z\nC Y\nC X\nC Y\nC X\nC X\nC X\nC X\nA Y\nC X\nA Y\nC X\nC Z\nA X\nA Z\nC Z\nC X\nC X\nC X\nC X\nB Z\nC Z\nC Z\nC Y\nC X\nC Z\nC X\nB Z\nB Z\nC Z\nC Z\nC X\nC X\nC Z\nB Z\nC X\nA Y\nC X\nC Z\nC X\nC Y\nC Z\nC Z\nC X\nC Z\nA Y\nA Y\nC X\nC Z\nC Z\nC X\nC X\nB Z\nC X\nC Z\nC Z\nC X\nC Z\nA X\nC Z\nB Z\nC Z\nA Y\nC Z\nC X\nC X\nB Z\nA Y\nC Z\nA Y\nC Y\nA Z\nC X\nA X\nC X\nA Y\nC Z\nC X\nC Z\nC Z\nC X\nC Z\nA X\nB Z\nC Y\nC Z\nC Z\nC X\nC Z\nB Z\nC Y\nC Z\nC Z\nA X\nB Z\nA X\nB Z\nC X\nC Z\nA Z\nA Z\nC X\nA X\nA X\nB Z\nA Y\nA Y\nA Z\nC X\nC Z\nC Z\nC X\nC X\nC X\nA X\nC X\nC Z\nC Y\nC Z\nC X\nC Z\nC X\nA X\nA Y\nC X\nA X\nC X\nB Z\nB Z\nB X\nC X\nA X\nB X\nC X\nA Y\nC Z\nC Y\nC Z\nC X\nA X\nA Y\nC Z\nB Z\nC X\nB Z\nC Z\nB Z\nA X\nA X\nC Y\nB Z\nC X\nB Z\nA Y\nC Z\nA Y\nC Z\nC X\nA Z\nC Z\nC Z\nB Z\nA Y\nB Z\nC Y\nC X\nA Y\nA X\nA X\nC X\nC Y\nB Z\nC X\nC Z\nC Z\nA X\nA Y\nC X\nC Y\nB Z\nC Z\nC X\nA X\nC Z\nC X\nC X\nB Z\nC Y\nA Y\nA X\nC Z\nB Z\nC X\nC Z\nA Y\nC X\nB Z\nC Y\nB X\nC X\nC X\nC Y\nA Y\nA X\nC Y\nC Y\nC Z\nC Y\nC Y\nC X\nB X\nC X\nA Y\nC Z\nC Z\nA Y\nC Z\nC Z\nC Z\nC Z\nC Z\nC Y\nA Y\nC Z\nA X\nC Y\nC Z\nC X\nC Z\nC X\nA Z\nC X\nA Y\nB Y\nB Z\nA Y\nA Y\nC Z\nC X\nB Z\nB X\nB Y\nC X\nC Z\nB Z\nA X\nC X\nC X\nC Y\nA X\nC Z\nC Y\nA Y\nA X\nA X\nB X\nA Y\nC Y\nC Z\nC Z\nC X\nC X\nA X\nC Z\nA Z\nA Y\nA X\nC X\nA Y\nB Z\nC X\nC Z\nC Y\nC Z\nC Z\nC X\nC Z\nA X\nA Y\nC X\nC X\nC X\nC Z\nC Y\nC Z\nB Z\nC Z\nB Z\nA Y\nA X\nC Z\nC X\nC Z\nC X\nA X\nC Z\nC Z\nC X\nC X\nC Z\nA Y\nA Z\nA Y\nC Z\nC Z\nC X\nC Y\nC X\nC Y\nA X\nC X\nA Y\nB Z\nB Z\nC X\nC X\nC Z\nC X\nA Y\nA Z\nA Y\nC X\nC Z\nA Y\nC Y\nC Z\nB Z\nA X\nC X\nC Z\nC Z\nA Y\nA Y\nA Y\nA Y\nC X\nB Z\nA Z\nB X\nA X\nB X\nC Z\nC Z\nC Z\nB Z\nA Y\nC Z\nC Y\nC X\nC Y\nA Y\nC X\nC Y\nC Y\nA X\nC Y\nC X\nC X\nC X\nC X\nA Y\nA Y\nC X\nC Z\nC Z\nA Y\nC Z\nA Y\nC Z\nC Z\nC X\nC X\nC Z\nC Y\nC Z\nA X\nA X\nC Y\nB Z\nA X\nB Z\nB Z\nC X\nC Z\nC Y\nA X\nC Z\nC Y\nC Z\nC Y\nA Y\nB X\nC Y\nC Y\nC X\nC X\nC Z\nC Z\nC X\nA Y\nC Z\nB Z\nC Y\nC X\nC Y\nC Z\nC X\nA X\nA Y\nC Z\nB Z\nC X\nC Z\nC X\nC Z\nC X\nA X\nC Z\nA X\nB Z\nC X\n'

const strategyGuideArray = puzzleInput.match(/\D \D/g);

const LOSS = 'LOSS';
const DRAW = 'DRAW';
const WIN = 'WIN';

const Rock = 'Rock';
const Paper = 'Paper';
const Scissors = 'Scissors';

let score = 0;

strategyGuideArray.map((pair) => {
    const temp = pair.split(' ');

    const roundEnd = getRoundEnd(temp[1]);

    const myChoose = getMyChooseByRoundEnd(roundEnd, temp[0]);

    score = score + getScoreByShape(myChoose);
    score = score + getScoreByRoundEnd(roundEnd);
});

console.log(score);

function getScoreByRoundEnd(roundEnd) {
    if (roundEnd === LOSS) {
        return 0;
    }
    if (roundEnd === DRAW) {
        return 3;
    }
    if (roundEnd === WIN) {
        return 6;
    }
}

function getScoreByShape(shape) {
    if (shape === 'A' || shape === Rock) {
        return 1;
    }
    if (shape === 'B' || shape === Paper) {
        return 2;
    }
    if (shape === 'C' || shape === Scissors) {
        return 3;
    }
}

function getRoundEnd(input) {
    if (input === 'X') {
        return LOSS;
    }
    if (input === 'Y') {
        return DRAW;
    }
    if (input === 'Z') {
        return WIN;
    }
}

function getMyChooseByRoundEnd(roundEnd, opponentChoose) {
    // LOSS
    if (roundEnd === LOSS) {
        return getMyLossChooseBy(opponentChoose);
    }
    // DRAW
    if (roundEnd === DRAW) {
        return getMyDrawChooseBy(opponentChoose);
    }
    // WIN
    if (roundEnd === WIN) {
        return getMyWinChooseBy(opponentChoose);
    }
}

function getMyLossChooseBy(opponentChoose) {
    if (opponentChoose === Rock || opponentChoose === 'A') {
        return Scissors
    }
    if (opponentChoose === Paper || opponentChoose === 'B') {
        return Rock
    }
    if (opponentChoose === Scissors || opponentChoose === 'C') {
        return Paper
    }
}

function getMyDrawChooseBy(opponentChoose) {
    if (opponentChoose === Rock || opponentChoose === 'A') {
        return Rock
    }
    if (opponentChoose === Paper || opponentChoose === 'B') {
        return Paper
    }
    if (opponentChoose === Scissors || opponentChoose === 'C') {
        return Scissors
    }
}

function getMyWinChooseBy(opponentChoose) {
    if (opponentChoose === Rock || opponentChoose === 'A') {
        return Paper
    }
    if (opponentChoose === Paper || opponentChoose === 'B') {
        return Scissors
    }
    if (opponentChoose === Scissors || opponentChoose === 'C') {
        return Rock
    }
}
