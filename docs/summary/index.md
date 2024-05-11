# Decoding Discourse: Language Features in Customer Reviews

<div style="text-align: center;">
    <img src="/bg01.jpeg"
    style="width: 60%; height: auto;
    margin: auto; display: block;" />
</div>

## 1 - Methodological Approach

::: danger - Reference
**Quantitative Analysis:**
Brezina, V., Weill-Tessier, P., & McEnery, T. (2020). *LancsBox 5.x and 6.x* [Software]. Available at: [http://corpora.lancs.ac.uk/lancsbox.l](http://corpora.lancs.ac.uk/lancsbox.l)

**Qualitative Analysis:**
Ochs, E. (1992). Indexing Gender. In A. Duranti and C. Goodwin (eds), *Rethinking Context: Language as an Interactive Phenomenon.* Cambridge: Cambridge University Press. pp.335-358.

:::

## 2 - Dominant Language in Reviews

::: tip Table -- Top ten content words or phrases in reviews, ranked by frequency
| **Rank** |  **Lexicon**   | **Frequency (times)** |
|:--------:|:--------------:|:---------------------:|
|    1     |    “size(s)”   |          238          |
|    2     |   “comfort”    |          234          |
|    3     |   “variety”    |          144          |
|    4     |     “flow”     |          135          |
|    5     | “ease of use”  |          108          |
|    6     | “applicator”   |          102          |
|    7     | “protection”   |           96          |
|    8     |     “leaks”    |           83          |
|    9     |    “insert”    |           65          |
|   10     | “absorbency”   |           59          |
:::

## 3 - The “I” Identity: First person pronouns

::: tip Desc:
 **“I”** (*1072* times) and **“me”** (*137* times) appear frequently, that is to say, female consumers are likely to use first-person pronoun.

| !["alt text"](/I_one.png) |
|:----------------------:|
| *Figure 1 -- The occurrence and context of the pronoun “I” in the corpus* |

| !["alt text"](/I_two.png) |
|:----------------------:|
| *Figure 2 -- The occurrence and context of the pronoun “me” in the corpus* |
  
:::

## 4 - Evaluative Language and Intensifiers

::: tip Emphasizing Attitude and Agency: More Positive Discourse and Intensifiers
| Word            | Frequency(times) | Examples (times)                          |
|-----------------|------------------|-------------------------------------------|
| Positive words  | 539              | love(254), good(98), perfect(97)           |
| Negative words  | 34               | uncomfortable(11), hate(5), complaint(3)  |
| Intensifiers    | 389              | super(154), very(146), highly(39)         |
:::

## 5 - Euphemisms and Metaphors

::: tip (few of the reviews)
!["alt text"](/Summary_05.jpg)

### “Dancing Around the Subject”-- Narrative Strategies**

- **Metaphor:**
*Easier. Like a marshmallow for your sunflower.*

- **Avoid direct terms:**
*So as comfortable as you can be during shark week anyway!*

- **Personification:**
*This box includes every size I need to make it through Aunt Flo's visit.*
:::

## 6 - Ending Summary

  <div style="text-align: center;">
    <el-button plain size="large" @click="dialogTableVisible = true" type="danger" >Click to View Ending!</el-button>
  </div>

<el-dialog v-model="dialogTableVisible"  width="900">
  <h3>"A Call to Reflection: Shaping the Future of Menstrual Discourse"</h3>
  <p>
    As you navigate away from the in-depth analysis and interactive exploration of language within our reviews, we invite you to carry forward the insights gained here. The conversation around menstruation is not merely about the physical experience, but a profound reflection of our societal norms, gender ideologies, and the ever-evolving landscape of human expression.
  </p>
  <el-image style="display: block; margin: 20px auto;" src="/Tampon-U-Need-2-Know/ending.png"></el-image>
  <h3>!!! Your Voice Matters !!!</h3>
  <p>
    Remember, the words we use and the conversations we engage in have the power to transform societal attitudes. As you step back into the world, armed with a deeper understanding of the language of menstruation, we encourage you to be a catalyst for change. Let's continue to speak openly, to listen empathetically, and to challenge the norms that confine us.
  </p>
  <template #footer>
      <div class="dialog-footer">
        <el-button type="primary" size="large" @click="dialogTableVisible = false">
          Thank you !
        </el-button>
      </div>
  </template>
</el-dialog>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElButton, ElDialog, ElImage } from 'element-plus'

const dialogTableVisible = ref(false)
</script>

<style scoped>
h3 {
  margin-top: 20px;
}
p {
  margin: 10px 0;
}
</style>
