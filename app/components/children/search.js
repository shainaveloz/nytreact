var React = require('react');

<div class="row">
    <form class="col s12">
        <div class="row">
            <div class="input-field col s6">
                <input placeholder="Placeholder" id="topic" type="text" class="validate">
                    <label for="topic">Topic</label>
            </div>
            <div class="input-field col s6">
                <input id="start_year" type="text" class="validate">
                    <label for="start_year">Start Year</label>
            </div>
            <div class="input-field col s6">
                <input id="end_year" type="text" class="validate">
                    <label for="end_year">Start Year</label>
            </div>
        </div>
        <button class="btn waves-effect waves-light" type="submit" name="action">Submit
            <i class="material-icons right">send</i>
        </button>
    </form>
</div>