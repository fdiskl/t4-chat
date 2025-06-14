Below is one acceptable solution in Python. (There are many ways to solve it!) In Advent of Code 2022 Day 2 you are given a “strategy guide” for Rock‐Paper‐Scissors. In Part 1 the guide tells you which move to play, and in Part 2 the guide tells you the desired outcome (loss/draw/win). In both parts you score points based on the move you choose (Rock=1, Paper=2, Scissors=3) plus points for the outcome (loss=0, draw=3, win=6).

For example, the sample input

  A Y
  B X
  C Z

means:

• In Part 1:
  – A means opponent plays Rock.
  – Y means you play Paper.

• In Part 2:
  – A means opponent plays Rock.
  – Y means you must draw (so you play Rock).

Below is one complete Python solution that computes both parts.

────────────────────────────
#!/usr/bin/env python3
import sys

# Mapping for opponent:
#   A: Rock
#   B: Paper
#   C: Scissors
#
# For Part 1, your move is given by:
#   X: Rock
#   Y: Paper
#   Z: Scissors
#
# The score for the shape you select is:
#   Rock = 1, Paper = 2, Scissors = 3.
#
# Outcome points: win = 6, draw = 3, lose = 0.

# Part 1 lookup dictionaries:
move_map = {
    'A': 'R', 'B': 'P', 'C': 'S',  # opponent
    'X': 'R', 'Y': 'P', 'Z': 'S'   # your move
}
score_shape = {'R': 1, 'P': 2, 'S': 3}
# Outcome rules: Rock beats Scissors, Scissors beats Paper, Paper beats Rock.
def outcome_points(opponent_move, your_move):
    if opponent_move == your_move:
        return 3  # draw
    if (your_move, opponent_move) in [('R','S'), ('P','R'), ('S','P')]:
        return 6  # win
    return 0    # loss

def part1(lines):
    total = 0
    for line in lines:
        if not line.strip():
            continue
        op, you = line.split()
        op_move = move_map[op]
        your_move = move_map[you]
        round_score = score_shape[your_move] + outcome_points(op_move, your_move)
        total += round_score
    return total

# Part 2: The second column now tells you the desired outcome:
#   X: you need to lose
#   Y: you need to draw
#   Z: you need to win.
#
# You still score as before (shape points plus outcome points).
#
# For each opponent move, we need to determine the move to lose/draw/win.
# If opponent_move is given (R, P, S) then:
#   To draw: play the same move.
#   To win:
#       if opponent is R, play P;
#       if opponent is P, play S;
#       if opponent is S, play R.
#   To lose:
#       if opponent is R, play S;
#       if opponent is P, play R;
#       if opponent is S, play P.
win_choice = {
    'R': 'P', # paper beats rock
    'P': 'S', # scissors beats paper
    'S': 'R'  # rock beats scissors
}
lose_choice = {
    'R': 'S', # scissors loses to rock
    'P': 'R', # rock loses to paper
    'S': 'P'  # paper loses to scissors
}

def part2(lines):
    total = 0
    for line in lines:
        if not line.strip():
            continue
        op, outcome = line.split()
        op_move = move_map[op]
        if outcome == 'Y':  # draw: play same move
            your_move = op_move
            round_points = 3
        elif outcome == 'Z':  # win: play the move that wins against it
            your_move = win_choice[op_move]
            round_points = 6
        elif outcome == 'X':  # lose: play the move that loses
            your_move = lose_choice[op_move]
            round_points = 0
        total += score_shape[your_move] + round_points
    return total

def main():
    if len(sys.argv) < 2:
        print("Usage: {} input_file".format(sys.argv[0]))
        sys.exit(1)
    with open(sys.argv[1]) as f:
        lines = f.readlines()
    answer1 = part1(lines)
    answer2 = part2(lines)
    print("Part 1:", answer1)
    print("Part 2:", answer2)

if __name__ == '__main__':
    main()

────────────────────────────
Explanation:

1. Part 1:
   • We convert the letters to moves (R, P, S).
   • Compute the shape score and add outcome points based on whether you win, draw, or lose.
   • Sum over all rounds.

2. Part 2:
   • The second column tells the desired outcome.
   • We decide the move you must make according to the opponent’s move.
   • Again, add the shape and outcome scores.

To run the solution, save it (say as solution.py) and run:

  python3 solution.py input.txt

where input.txt is your puzzle input.

This is one valid solution for Advent of Code 2022 Day 2. Enjoy!
