// =====================================================================
//  SOAL: Mario Bros dengan OOP (TypeScript)
// =====================================================================
//  Mario memiliki atribut: HP, speed, positionX, positionY, invincible,
//  currentForm. Mario dapat berubah menjadi 3 form: 'mario',
//  'super mario', dan 'fire mario'.
//
//  Default: HP = 1, speed = 5, currentForm = 'mario', invincible = false,
//           positionX = 0, positionY = 0
//
//  1. SuperMushroom (Jamur): Mario menjadi Super Mario, HP + 1.
//  2. FireFlower (Bunga): Mario menjadi Fire Mario, HP + 1,
//     dan dapat menembakkan bola api.
//  3. SuperStar (Bintang): Mario kebal terhadap serangan.
//  4. Diserang: HP - 1 dan kembali ke form 'mario'.
//     Jika sedang kebal, serangan tidak berpengaruh.
//  5. Bergerak ke kanan: positionX + speed.
//  6. Bergerak ke kiri: positionX - speed.
//
//  Buat class, attribute, method, dan object.
//  Terapkan inheritance dan polymorphism.
// =====================================================================

// Kerjakan Quiznya Disini

type Form = 'mario' | 'super mario' | 'fire mario';

class Mario {
  hp: number = 1;
  speed: number = 5;
  positionX: number = 0;
  positionY: number = 0;
  invincible: boolean = false;
  currentForm: Form = 'mario';

  moveRight(): void {
    this.positionX += this.speed;
  }

  moveLeft(): void {
    this.positionX -= this.speed;
  }

  // 4. Diserang
  takeDamage(): void {
    if (this.invincible) {
      console.log("Mario kebal, serangan tidak berpengaruh!");
      return;
    }
    this.hp -= 1;
    this.currentForm = 'mario';
  }

  shootFireball(): void {
    if (this.currentForm === 'fire mario') {
      console.log("Mario menembakkan bola api!");
    } else {
      console.log("Mario belum bisa menembak bola api.");
    }
  }
}

abstract class PowerUp {
  abstract applyTo(mario: Mario): void;
}

class SuperMushroom extends PowerUp {
  applyTo(mario: Mario): void {
    mario.currentForm = 'super mario';
    mario.hp += 1;
  }
}

class FireFlower extends PowerUp {
  applyTo(mario: Mario): void {
    mario.currentForm = 'fire mario';
    mario.hp += 1;
  }
}

class SuperStar extends PowerUp {
  applyTo(mario: Mario): void {
    mario.invincible = true;
  }
}

const mario = new Mario();
const items: PowerUp[] = [new SuperMushroom(), new FireFlower(), new SuperStar()];

// Polymorphism: semua dipanggil dengan cara yang sama
items.forEach(item => item.applyTo(mario));

mario.moveRight();
mario.shootFireball();
mario.takeDamage();
console.log(mario);
