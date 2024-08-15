% Define x and y
X = [89,7921; 72, 5184; 94, 8836; 69,4761]
y = [1,96;1,74; 1,87; 1,69]

% Calculate Normal
theta = (pinv(X'*X))*X'*y
