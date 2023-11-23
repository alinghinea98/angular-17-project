import { Component, Inject, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { OpenaiService } from './service/openai.service';
import { HttpClientModule } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [OpenaiService]
})
export class AppComponent {
  private readonly _openAIService = inject(OpenaiService);
  loading = undefined;
  title = 'angular-17-project';
  program = null;

  getProgram(): void {
    this.loading = true;
    const prompt = `
    I want you to act as a personal trainer. Your role is to devise the best plan for that person depending on their current fitness level, goals, and lifestyle habits.
    You should use your knowledge of exercise science, nutrition advice, and other relevant factors to create a plan suitable for them.
    The height of the person is 175cm, and the weight is 63kg. The goal is to put on muscle mass and get rid of body fat.
    You have to create a food program for each day and some recommended exercises. The food program must contain the meals, the nutritional values and the times when they must be taken.
    Please make sure your answer is strictly an object that respects the following form, without any other sentences: {
      luni: {
        mancare: {
          micDeJun: {
            ora: string,
            ingrediente: string,
            modPreparare: string
            cantinate: string,
            informatiiNutritionale: {
              kcal: string,
              proteine: string,
              carbohidrati: string
            },
          },
          pranz: {
            ora: string,
            ingrediente: string,
            modPreparare: string
            cantitate: string,
            informatiiNutritionale: {
              kcal: string,
              proteine: string,
              carbohidrati: string
            },
          },
          cina: {
            ora: string,
            ingrediente: string,
            modPreparare: string
            cantitate: string,
            informatiiNutritionale: {
              kcal: string,
              proteine: string,
              carbohidrati: string
            },
          }
        },
        antrenament: string
      },
      marti: {
        mancare: {
          micDeJun: {
            ora: string,
            ingrediente: string,
            modPreparare: string
            cantinate: string,
            informatiiNutritionale: {
              kcal: string,
              proteine: string,
              carbohidrati: string
            },
          },
          pranz: {
            ora: string,
            ingrediente: string,
            modPreparare: string
            cantitate: string,
            informatiiNutritionale: {
              kcal: string,
              proteine: string,
              carbohidrati: string
            },
          },
          cina: {
            ora: string,
            ingrediente: string,
            modPreparare: string
            cantitate: string,
            informatiiNutritionale: {
              kcal: string,
              proteine: string,
              carbohidrati: string
            },
          }
        },
        antrenament: string
      },
      miercuri: {
        mancare: {
          micDeJun: {
            ora: string,
            ingrediente: string,
            modPreparare: string
            cantinate: string,
            informatiiNutritionale: {
              kcal: string,
              proteine: string,
              carbohidrati: string
            },
          },
          pranz: {
            ora: string,
            ingrediente: string,
            modPreparare: string
            cantitate: string,
            informatiiNutritionale: {
              kcal: string,
              proteine: string,
              carbohidrati: string
            },
          },
          cina: {
            ora: string,
            ingrediente: string,
            modPreparare: string
            cantitate: string,
            informatiiNutritionale: {
              kcal: string,
              proteine: string,
              carbohidrati: string
            },
          }
        },
        antrenament: string
      },
      joi: {
        mancare: {
          micDeJun: {
            ora: string,
            ingrediente: string,
            modPreparare: string
            cantinate: string,
            informatiiNutritionale: {
              kcal: string,
              proteine: string,
              carbohidrati: string
            },
          },
          pranz: {
            ora: string,
            ingrediente: string,
            modPreparare: string
            cantitate: string,
            informatiiNutritionale: {
              kcal: string,
              proteine: string,
              carbohidrati: string
            },
          },
          cina: {
            ora: string,
            ingrediente: string,
            modPreparare: string
            cantitate: string,
            informatiiNutritionale: {
              kcal: string,
              proteine: string,
              carbohidrati: string
            },
          }
        },
        antrenament: string
      },
      vineri: {
        mancare: {
          micDeJun: {
            ora: string,
            ingrediente: string,
            modPreparare: string
            cantinate: string,
            informatiiNutritionale: {
              kcal: string,
              proteine: string,
              carbohidrati: string
            },
          },
          pranz: {
            ora: string,
            ingrediente: string,
            modPreparare: string
            cantitate: string,
            informatiiNutritionale: {
              kcal: string,
              proteine: string,
              carbohidrati: string
            },
          },
          cina: {
            ora: string,
            ingrediente: string,
            modPreparare: string
            cantitate: string,
            informatiiNutritionale: {
              kcal: string,
              proteine: string,
              carbohidrati: string
            },
          }
        },
        antrenament: string
      },
      sambata: {
        mancare: {
          micDeJun: {
            ora: string,
            ingrediente: string,
            modPreparare: string
            cantinate: string,
            informatiiNutritionale: {
              kcal: string,
              proteine: string,
              carbohidrati: string
            },
          },
          pranz: {
            ora: string,
            ingrediente: string,
            modPreparare: string
            cantitate: string,
            informatiiNutritionale: {
              kcal: string,
              proteine: string,
              carbohidrati: string
            },
          },
          cina: {
            ora: string,
            ingrediente: string,
            modPreparare: string
            cantitate: string,
            informatiiNutritionale: {
              kcal: string,
              proteine: string,
              carbohidrati: string
            },
          }
        },
        antrenament: string
      },
      duminica: {
        mancare: {
          micDeJun: {
            ora: string,
            ingrediente: string,
            modPreparare: string
            cantinate: string,
            informatiiNutritionale: {
              kcal: string,
              proteine: string,
              carbohidrati: string
            },
          },
          pranz: {
            ora: string,
            ingrediente: string,
            modPreparare: string
            cantitate: string,
            informatiiNutritionale: {
              kcal: string,
              proteine: string,
              carbohidrati: string
            },
          },
          cina: {
            ora: string,
            ingrediente: string,
            modPreparare: string
            cantitate: string,
            informatiiNutritionale: {
              kcal: string,
              proteine: string,
              carbohidrati: string
            },
          }
        },
        antrenament: string
      }
    It must respect the programm for all days and please give the answer in romanian language`;
    this._openAIService.getOpenaiResponse(prompt).subscribe({
      next: (response) => {
        const correctedJsonString = response.choices[0].message.content.replace(/'/g, '"');
        console.log(JSON.parse(correctedJsonString));
        this.program = correctedJsonString;
        this.loading = false;
      },
      error: (error) => {
        console.error(error);
        this.loading = false;
      }
    });
  }
}