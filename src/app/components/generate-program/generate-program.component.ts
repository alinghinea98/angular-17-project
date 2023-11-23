import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpenaiService } from '../../service/openai.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-generate-program',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
  ],
  providers: [OpenaiService],
  templateUrl: './generate-program.component.html',
  styleUrl: './generate-program.component.scss',
})
export class GenerateProgramComponent {
  private readonly _openAIService = inject(OpenaiService);
  private readonly _formBuilder = inject(FormBuilder);

  readonly Goals = GoalType;
  programForm: FormGroup;
  loading = undefined;
  title = 'angular-17-project';
  program = null;
  matcher = new MyErrorStateMatcher();
  goalKeys = Object.keys(this.Goals);

  constructor() {
    this._initForm();
  }

  getProgram(): void {
    const {
      height = null,
      weight = null,
      age = null,
      firstName = null,
      lastName = null,
      goal = null,
    } = { ...this.programForm.getRawValue() };
    this.loading = true;
    const prompt = `
    I want you to act as a personal trainer. Your role is to devise the best plan for that person depending on their current fitness level, goals, and lifestyle habits.
    You should use your knowledge of exercise science, nutrition advice, and other relevant factors to create a plan suitable for them.
    The height of the person is ${height}cm, and the weight is ${weight}kg. The goal is to ${goal}.
    The person age is ${age}.
    You have to create a food program for each day and some recommended exercises. The food program must contain the meals, the nutritional values and the times when they must be taken.
    Please make sure your answer is strictly an object that can be used after with Object.parse() and respects the following form, without any other sentences: {
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
        const correctedJsonString = response.choices[0].message.content.replace(
          /'/g,
          '"'
        );
        console.log(
          `The program for user ${firstName} ${lastName} is: `,
          JSON.parse(correctedJsonString)
        );
        this.program = correctedJsonString;
        this.loading = false;
      },
      error: (error) => {
        console.error(error);
        this.loading = false;
      },
    });
  }

  private _initForm(): void {
    this.programForm = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      height: ['', Validators.required],
      weight: ['', Validators.required],
      age: ['', Validators.required],
      goal: ['', Validators.required],
    });
  }
}

export enum GoalType {
  GAIN = 'gain muscle',
  BURN = 'burn body fat',
  LOSE = 'lose weight',
  BULK = 'bulk',
}
