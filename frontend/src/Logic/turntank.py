import random
class Tank:
    def __init__(self) -> None:
        self.energy = 1
        self.range = 1
        self.life = 3
        self.xcoordinate = 0
        self.ycoordinate = 0
    def placetank(self):
        self.xcoordinate = random.randint(0,10)
        self.ycoordinate = random.randint(0,10)
    def upgrade(self):
        self.range += 1
    def transfer(self):
        pass

class Board:
    def __init__(self) -> None:
        self.board = [[False for i in range(10)] for j in range(10)]

    def placenewtank(self,x,y):
        tank = Tank()
        self.board[x][y]=tank

    def move(self,tank):
        tomovex = input("x")
        tomovey = input("y")
        if (self.board[tomovex][tomovey]==False):
            self.board[tank.xcoordinate][tank.ycoordinate] = False
            self.board[tomovex][tomovey] = tank
            tank.xcoordinate = tomovex
            tank.ycoordinate = tomovey
        else:
            (print("jahil h kya"))

    def shoot(self,toshootx,toshooty,tank):
        if(tank.energy==0):
          print("nhi marega")
          return
        if(self.board[toshootx][toshooty]!=False):
            self.board[toshootx][toshooty].life -= 1
            tank.energy -=1

    