function [theta, J_history] = gradientDescent(X, y, theta, alpha, num_iters)
%GRADIENTDESCENT Performs gradient descent to learn theta
%   theta = GRADIENTDESCENT(X, y, theta, alpha, num_iters) updates theta by 
%   taking num_iters gradient steps with learning rate alpha

% Initialize some useful values
m = length(y); % number of training examples
J_history = zeros(num_iters, 1);

for iter = 1:num_iters

    % ====================== YOUR CODE HERE ======================
    % Instructions: Perform a single gradient step on the parameter vector
    %               theta. 
    %
    % Hint: While debugging, it can be useful to print out the values
    %       of the cost function (computeCost) and gradient here.
    %

    % for theta  simultaneous update.

    theta_prev = theta;

    % number of features.
    
    p = size(X, 2);

    % simultaneous update theta using theta_prev.
    
    for j = 1:p

        deriv = ((X*theta_prev - y)'*X(:, j))/m;

        theta(j) = theta_prev(j)-(alpha*deriv);
    end





    % ============================================================

    % Save the cost J in every iteration    
    J_history(iter) = computeCost(X, y, theta);
    theta_history(iter, :) = theta';


end

end
