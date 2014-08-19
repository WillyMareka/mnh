// Generated by CoffeeScript 1.6.3
(function(){var e,t,n,r={}.hasOwnProperty,i=function(e,t){function i(){this.constructor=e}for(var n in t)r.call(t,n)&&(e[n]=t[n]);i.prototype=t.prototype;e.prototype=new i;e.__super__=t.prototype;return e};e=jQuery;e.fn.extend({chosen:function(n){return AbstractChosen.browser_is_supported()?this.each(function(r){var i,s;i=e(this);s=i.data("chosen");n==="destroy"&&s?s.destroy():s||i.data("chosen",new t(this,n))}):this}});t=function(t){function r(){n=r.__super__.constructor.apply(this,arguments);return n}i(r,t);r.prototype.setup=function(){this.form_field_jq=e(this.form_field);this.current_selectedIndex=this.form_field.selectedIndex;return this.is_rtl=this.form_field_jq.hasClass("chosen-rtl")};r.prototype.set_up_html=function(){var t,n;t=["chosen-container"];t.push("chosen-container-"+(this.is_multiple?"multi":"single"));this.inherit_select_classes&&this.form_field.className&&t.push(this.form_field.className);this.is_rtl&&t.push("chosen-rtl");n={"class":t.join(" "),style:"width: "+this.container_width()+";",title:this.form_field.title};this.form_field.id.length&&(n.id=this.form_field.id.replace(/[^\w]/g,"_")+"_chosen");this.container=e("<div />",n);this.is_multiple?this.container.html('<ul class="chosen-choices"><li class="search-field"><input type="text" value="'+this.default_text+'" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chosen-drop"><ul class="chosen-results"></ul></div>'):this.container.html('<a class="chosen-single chosen-default" tabindex="-1"><span>'+this.default_text+'</span><div><b></b></div></a><div class="chosen-drop"><div class="chosen-search"><input type="text" autocomplete="off" /></div><ul class="chosen-results"></ul></div>');this.form_field_jq.hide().after(this.container);this.dropdown=this.container.find("div.chosen-drop").first();this.search_field=this.container.find("input").first();this.search_results=this.container.find("ul.chosen-results").first();this.search_field_scale();this.search_no_results=this.container.find("li.no-results").first();if(this.is_multiple){this.search_choices=this.container.find("ul.chosen-choices").first();this.search_container=this.container.find("li.search-field").first()}else{this.search_container=this.container.find("div.chosen-search").first();this.selected_item=this.container.find(".chosen-single").first()}this.results_build();this.set_tab_index();this.set_label_behavior();return this.form_field_jq.trigger("chosen:ready",{chosen:this})};r.prototype.register_observers=function(){var e=this;this.container.bind("mousedown.chosen",function(t){e.container_mousedown(t)});this.container.bind("mouseup.chosen",function(t){e.container_mouseup(t)});this.container.bind("mouseenter.chosen",function(t){e.mouse_enter(t)});this.container.bind("mouseleave.chosen",function(t){e.mouse_leave(t)});this.search_results.bind("mouseup.chosen",function(t){e.search_results_mouseup(t)});this.search_results.bind("mouseover.chosen",function(t){e.search_results_mouseover(t)});this.search_results.bind("mouseout.chosen",function(t){e.search_results_mouseout(t)});this.search_results.bind("mousewheel.chosen DOMMouseScroll.chosen",function(t){e.search_results_mousewheel(t)});this.search_results.bind("touchstart.chosen",function(t){e.search_results_touchstart(t)});this.search_results.bind("touchmove.chosen",function(t){e.search_results_touchmove(t)});this.search_results.bind("touchend.chosen",function(t){e.search_results_touchend(t)});this.form_field_jq.bind("chosen:updated.chosen",function(t){e.results_update_field(t)});this.form_field_jq.bind("chosen:activate.chosen",function(t){e.activate_field(t)});this.form_field_jq.bind("chosen:open.chosen",function(t){e.container_mousedown(t)});this.form_field_jq.bind("chosen:close.chosen",function(t){e.input_blur(t)});this.search_field.bind("blur.chosen",function(t){e.input_blur(t)});this.search_field.bind("keyup.chosen",function(t){e.keyup_checker(t)});this.search_field.bind("keydown.chosen",function(t){e.keydown_checker(t)});this.search_field.bind("focus.chosen",function(t){e.input_focus(t)});this.search_field.bind("cut.chosen",function(t){e.clipboard_event_checker(t)});this.search_field.bind("paste.chosen",function(t){e.clipboard_event_checker(t)});return this.is_multiple?this.search_choices.bind("click.chosen",function(t){e.choices_click(t)}):this.container.bind("click.chosen",function(e){e.preventDefault()})};r.prototype.destroy=function(){e(this.container[0].ownerDocument).unbind("click.chosen",this.click_test_action);this.search_field[0].tabIndex&&(this.form_field_jq[0].tabIndex=this.search_field[0].tabIndex);this.container.remove();this.form_field_jq.removeData("chosen");return this.form_field_jq.show()};r.prototype.search_field_disabled=function(){this.is_disabled=this.form_field_jq[0].disabled;if(this.is_disabled){this.container.addClass("chosen-disabled");this.search_field[0].disabled=!0;this.is_multiple||this.selected_item.unbind("focus.chosen",this.activate_action);return this.close_field()}this.container.removeClass("chosen-disabled");this.search_field[0].disabled=!1;if(!this.is_multiple)return this.selected_item.bind("focus.chosen",this.activate_action)};r.prototype.container_mousedown=function(t){if(!this.is_disabled){t&&t.type==="mousedown"&&!this.results_showing&&t.preventDefault();if(t==null||!e(t.target).hasClass("search-choice-close")){if(!this.active_field){this.is_multiple&&this.search_field.val("");e(this.container[0].ownerDocument).bind("click.chosen",this.click_test_action);this.results_show()}else if(!this.is_multiple&&t&&(e(t.target)[0]===this.selected_item[0]||e(t.target).parents("a.chosen-single").length)){t.preventDefault();this.results_toggle()}return this.activate_field()}}};r.prototype.container_mouseup=function(e){if(e.target.nodeName==="ABBR"&&!this.is_disabled)return this.results_reset(e)};r.prototype.search_results_mousewheel=function(e){var t;e.originalEvent&&(t=-e.originalEvent.wheelDelta||e.originalEvent.detail);if(t!=null){e.preventDefault();e.type==="DOMMouseScroll"&&(t*=40);return this.search_results.scrollTop(t+this.search_results.scrollTop())}};r.prototype.blur_test=function(e){if(!this.active_field&&this.container.hasClass("chosen-container-active"))return this.close_field()};r.prototype.close_field=function(){e(this.container[0].ownerDocument).unbind("click.chosen",this.click_test_action);this.active_field=!1;this.results_hide();this.container.removeClass("chosen-container-active");this.clear_backstroke();this.show_search_field_default();return this.search_field_scale()};r.prototype.activate_field=function(){this.container.addClass("chosen-container-active");this.active_field=!0;this.search_field.val(this.search_field.val());return this.search_field.focus()};r.prototype.test_active_click=function(t){var n;n=e(t.target).closest(".chosen-container");return n.length&&this.container[0]===n[0]?this.active_field=!0:this.close_field()};r.prototype.results_build=function(){this.parsing=!0;this.selected_option_count=null;this.results_data=SelectParser.select_to_array(this.form_field);if(this.is_multiple)this.search_choices.find("li.search-choice").remove();else if(!this.is_multiple){this.single_set_selected_text();if(this.disable_search||this.form_field.options.length<=this.disable_search_threshold){this.search_field[0].readOnly=!0;this.container.addClass("chosen-container-single-nosearch")}else{this.search_field[0].readOnly=!1;this.container.removeClass("chosen-container-single-nosearch")}}this.update_results_content(this.results_option_build({first:!0}));this.search_field_disabled();this.show_search_field_default();this.search_field_scale();return this.parsing=!1};r.prototype.result_do_highlight=function(e){var t,n,r,i,s;if(e.length){this.result_clear_highlight();this.result_highlight=e;this.result_highlight.addClass("highlighted");r=parseInt(this.search_results.css("maxHeight"),10);s=this.search_results.scrollTop();i=r+s;n=this.result_highlight.position().top+this.search_results.scrollTop();t=n+this.result_highlight.outerHeight();if(t>=i)return this.search_results.scrollTop(t-r>0?t-r:0);if(n<s)return this.search_results.scrollTop(n)}};r.prototype.result_clear_highlight=function(){this.result_highlight&&this.result_highlight.removeClass("highlighted");return this.result_highlight=null};r.prototype.results_show=function(){if(this.is_multiple&&this.max_selected_options<=this.choices_count()){this.form_field_jq.trigger("chosen:maxselected",{chosen:this});return!1}this.container.addClass("chosen-with-drop");this.results_showing=!0;this.search_field.focus();this.search_field.val(this.search_field.val());this.winnow_results();return this.form_field_jq.trigger("chosen:showing_dropdown",{chosen:this})};r.prototype.update_results_content=function(e){return this.search_results.html(e)};r.prototype.results_hide=function(){if(this.results_showing){this.result_clear_highlight();this.container.removeClass("chosen-with-drop");this.form_field_jq.trigger("chosen:hiding_dropdown",{chosen:this})}return this.results_showing=!1};r.prototype.set_tab_index=function(e){var t;if(this.form_field.tabIndex){t=this.form_field.tabIndex;this.form_field.tabIndex=-1;return this.search_field[0].tabIndex=t}};r.prototype.set_label_behavior=function(){var t=this;this.form_field_label=this.form_field_jq.parents("label");!this.form_field_label.length&&this.form_field.id.length&&(this.form_field_label=e("label[for='"+this.form_field.id+"']"));if(this.form_field_label.length>0)return this.form_field_label.bind("click.chosen",function(e){return t.is_multiple?t.container_mousedown(e):t.activate_field()})};r.prototype.show_search_field_default=function(){if(this.is_multiple&&this.choices_count()<1&&!this.active_field){this.search_field.val(this.default_text);return this.search_field.addClass("default")}this.search_field.val("");return this.search_field.removeClass("default")};r.prototype.search_results_mouseup=function(t){var n;n=e(t.target).hasClass("active-result")?e(t.target):e(t.target).parents(".active-result").first();if(n.length){this.result_highlight=n;this.result_select(t);return this.search_field.focus()}};r.prototype.search_results_mouseover=function(t){var n;n=e(t.target).hasClass("active-result")?e(t.target):e(t.target).parents(".active-result").first();if(n)return this.result_do_highlight(n)};r.prototype.search_results_mouseout=function(t){if(e(t.target).hasClass("active-result"))return this.result_clear_highlight()};r.prototype.choice_build=function(t){var n,r,i=this;n=e("<li />",{"class":"search-choice"}).html("<span>"+t.html+"</span>");if(t.disabled)n.addClass("search-choice-disabled");else{r=e("<a />",{"class":"search-choice-close","data-option-array-index":t.array_index});r.bind("click.chosen",function(e){return i.choice_destroy_link_click(e)});n.append(r)}return this.search_container.before(n)};r.prototype.choice_destroy_link_click=function(t){t.preventDefault();t.stopPropagation();if(!this.is_disabled)return this.choice_destroy(e(t.target))};r.prototype.choice_destroy=function(e){if(this.result_deselect(e[0].getAttribute("data-option-array-index"))){this.show_search_field_default();this.is_multiple&&this.choices_count()>0&&this.search_field.val().length<1&&this.results_hide();e.parents("li").first().remove();return this.search_field_scale()}};r.prototype.results_reset=function(){this.reset_single_select_options();this.form_field.options[0].selected=!0;this.single_set_selected_text();this.show_search_field_default();this.results_reset_cleanup();this.form_field_jq.trigger("change");if(this.active_field)return this.results_hide()};r.prototype.results_reset_cleanup=function(){this.current_selectedIndex=this.form_field.selectedIndex;return this.selected_item.find("abbr").remove()};r.prototype.result_select=function(e){var t,n;if(this.result_highlight){t=this.result_highlight;this.result_clear_highlight();if(this.is_multiple&&this.max_selected_options<=this.choices_count()){this.form_field_jq.trigger("chosen:maxselected",{chosen:this});return!1}this.is_multiple?t.removeClass("active-result"):this.reset_single_select_options();n=this.results_data[t[0].getAttribute("data-option-array-index")];n.selected=!0;this.form_field.options[n.options_index].selected=!0;this.selected_option_count=null;this.is_multiple?this.choice_build(n):this.single_set_selected_text(n.text);(!e.metaKey&&!e.ctrlKey||!this.is_multiple)&&this.results_hide();this.search_field.val("");(this.is_multiple||this.form_field.selectedIndex!==this.current_selectedIndex)&&this.form_field_jq.trigger("change",{selected:this.form_field.options[n.options_index].value});this.current_selectedIndex=this.form_field.selectedIndex;return this.search_field_scale()}};r.prototype.single_set_selected_text=function(e){e==null&&(e=this.default_text);if(e===this.default_text)this.selected_item.addClass("chosen-default");else{this.single_deselect_control_build();this.selected_item.removeClass("chosen-default")}return this.selected_item.find("span").text(e)};r.prototype.result_deselect=function(e){var t;t=this.results_data[e];if(!this.form_field.options[t.options_index].disabled){t.selected=!1;this.form_field.options[t.options_index].selected=!1;this.selected_option_count=null;this.result_clear_highlight();this.results_showing&&this.winnow_results();this.form_field_jq.trigger("change",{deselected:this.form_field.options[t.options_index].value});this.search_field_scale();return!0}return!1};r.prototype.single_deselect_control_build=function(){if(!this.allow_single_deselect)return;this.selected_item.find("abbr").length||this.selected_item.find("span").first().after('<abbr class="search-choice-close"></abbr>');return this.selected_item.addClass("chosen-single-with-deselect")};r.prototype.get_search_text=function(){return this.search_field.val()===this.default_text?"":e("<div/>").text(e.trim(this.search_field.val())).html()};r.prototype.winnow_results_set_highlight=function(){var e,t;t=this.is_multiple?[]:this.search_results.find(".result-selected.active-result");e=t.length?t.first():this.search_results.find(".active-result").first();if(e!=null)return this.result_do_highlight(e)};r.prototype.no_results=function(t){var n;n=e('<li class="no-results">'+this.results_none_found+' "<span></span>"</li>');n.find("span").first().html(t);this.search_results.append(n);return this.form_field_jq.trigger("chosen:no_results",{chosen:this})};r.prototype.no_results_clear=function(){return this.search_results.find(".no-results").remove()};r.prototype.keydown_arrow=function(){var e;if(!this.results_showing||!this.result_highlight)return this.results_show();e=this.result_highlight.nextAll("li.active-result").first();if(e)return this.result_do_highlight(e)};r.prototype.keyup_arrow=function(){var e;if(!this.results_showing&&!this.is_multiple)return this.results_show();if(this.result_highlight){e=this.result_highlight.prevAll("li.active-result");if(e.length)return this.result_do_highlight(e.first());this.choices_count()>0&&this.results_hide();return this.result_clear_highlight()}};r.prototype.keydown_backstroke=function(){var e;if(this.pending_backstroke){this.choice_destroy(this.pending_backstroke.find("a").first());return this.clear_backstroke()}e=this.search_container.siblings("li.search-choice").last();if(e.length&&!e.hasClass("search-choice-disabled")){this.pending_backstroke=e;return this.single_backstroke_delete?this.keydown_backstroke():this.pending_backstroke.addClass("search-choice-focus")}};r.prototype.clear_backstroke=function(){this.pending_backstroke&&this.pending_backstroke.removeClass("search-choice-focus");return this.pending_backstroke=null};r.prototype.keydown_checker=function(e){var t,n;t=(n=e.which)!=null?n:e.keyCode;this.search_field_scale();t!==8&&this.pending_backstroke&&this.clear_backstroke();switch(t){case 8:this.backstroke_length=this.search_field.val().length;break;case 9:this.results_showing&&!this.is_multiple&&this.result_select(e);this.mouse_on_container=!1;break;case 13:e.preventDefault();break;case 38:e.preventDefault();this.keyup_arrow();break;case 40:e.preventDefault();this.keydown_arrow()}};r.prototype.search_field_scale=function(){var t,n,r,i,s,o,u,a,f;if(this.is_multiple){r=0;u=0;s="position:absolute; left: -1000px; top: -1000px; display:none;";o=["font-size","font-style","font-weight","font-family","line-height","text-transform","letter-spacing"];for(a=0,f=o.length;a<f;a++){i=o[a];s+=i+":"+this.search_field.css(i)+";"}t=e("<div />",{style:s});t.text(this.search_field.val());e("body").append(t);u=t.width()+25;t.remove();n=this.container.outerWidth();u>n-10&&(u=n-10);return this.search_field.css({width:u+"px"})}};return r}(AbstractChosen)}).call(this);